import { useEffect, useMemo, useState } from "react";

type UseTableOptions<T> = {
  data: T[];
  searchFields?: (keyof T)[];
  pageSize?: number;
  filterFn?: (item: T) => boolean;
};

export function useTable<T>({
  data,
  searchFields = [],
  pageSize = 6,
  filterFn,
}: UseTableOptions<T>) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
        setDebouncedSearch(search);
    },500);
    return() => {
        clearTimeout(timeoutId);
    };
  },[search]);
  

  const filteredData = useMemo(() => {
    let result = data;

    // Search
    if (debouncedSearch.trim()) {
      const searchValue = debouncedSearch.toLowerCase();

      result = result.filter((item) =>
        searchFields.some((field) =>
          String(item[field])
            .toLowerCase()
            .includes(searchValue)
        )
      );
    }

    // Custom filter
    if (filterFn) {
      result = result.filter(filterFn);
    }

    return result;
  }, [data, search, searchFields, filterFn]);


  // PAGINATION
  

  const totalItems = filteredData.length;

  const totalPages = Math.ceil(
    totalItems / pageSize
  );

  // Prevent invalid page
  const safeCurrentPage =
    totalPages === 0
      ? 1
      : Math.min(currentPage, totalPages);

  const startIndex =
    (safeCurrentPage - 1) * pageSize;

  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + pageSize
  );


  // 3 PAGE CAROUSEL


  const visiblePages = useMemo(() => {
    if (totalPages <= 3) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    let startPage = safeCurrentPage - 1;

    if (startPage < 1) {
      startPage = 1;
    }

    if (startPage + 2 > totalPages) {
      startPage = totalPages - 2;
    }

    return [
      startPage,
      startPage + 1,
      startPage + 2,
    ];
  }, [safeCurrentPage, totalPages]);



  function handleSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
  }

  return {
    // Data
    data: paginatedData,

    // Search
    search,
    setSearch: handleSearch,

    // Pagination
    currentPage: safeCurrentPage,
    setCurrentPage: handlePageChange,

    totalPages,
    totalItems,
    startIndex,

    // Pagination carousel
    visiblePages,
  };
}