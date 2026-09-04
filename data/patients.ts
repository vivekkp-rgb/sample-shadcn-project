export type AvatarColor = "blue" | "green" | "purple" | "red";

export type PatientStatus = "Stable" | "Follow-Up" | "Critical";

export type AppointmentStatus =
  | "Confirmed"
  | "Waiting"
  | "Completed"
  | "Scheduled";

export type AlertColor = "red" | "yellow" | "green";

export interface Patient {
  id: string;
  initials: string;
  name: string;

  age: number;
  gender: string;
  bloodGroup: string;
  condition: string;

  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;

  status: PatientStatus;
  avatarColor: AvatarColor;

  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };

  vitals: {
    bloodPressure: string;
    heartRate: string;
    temperature: string;
    spo2: string;
  };

  appointments: {
    date: string;
    doctor: string;
    type: string;
    status: "Completed" | "Scheduled";
    notes: string;
  }[];

  medicalHistory: {
    date: string;
    title: string;
    description: string;
  }[];
}

export interface TodaysAppointment {
  patientId: string;
  initials: string;
  patient: string;
  time: string;
  type: string;
  status: "Confirmed" | "Waiting" | "Completed" | "Scheduled";
  avatarColor: AvatarColor;
}

export interface ClinicalAlert {
  initials: string;
  patient: string;
  msg: string;
  time: string;
  color: AlertColor;
}

export const patients: Patient[] = [
  {
    id: "PT-10201",
    initials: "EJ",
    name: "Emily Johnson",
    age: 32,
    gender: "Female",
    bloodGroup: "O+",
    condition: "Hypertension",
    dateOfBirth: "March 15, 1994",
    phone: "(555) 123-4567",
    email: "emily.johnson@email.com",
    address: "123 Oak Street, Springfield, IL 62704",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Robert Johnson",
      relationship: "Spouse",
      phone: "(555) 987-6543",
    },
    vitals: {
      bloodPressure: "120/80",
      heartRate: "72",
      temperature: "98.4",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 18, 2026",
        doctor: "Dr. Sarah",
        type: "Follow-up",
        status: "Completed",
        notes: "BP reviewed, medication adjusted.",
      },
      {
        date: "Sep 08, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Scheduled",
        notes: "Routine blood pressure follow-up.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 18, 2026",
        title: "Follow-up consultation",
        description: "Blood pressure reviewed and medication adjusted.",
      },
      {
        date: "Jul 12, 2026",
        title: "General consultation",
        description: "Routine health examination.",
      },
      {
        date: "Jun 05, 2026",
        title: "Lab results",
        description: "Blood work reviewed. Values within normal range.",
      },
    ],
  },

  {
    id: "PT-10202",
    initials: "MB",
    name: "Michael Brown",
    age: 45,
    gender: "Male",
    bloodGroup: "A+",
    condition: "Asthma",
    dateOfBirth: "November 8, 1980",
    phone: "(555) 234-5678",
    email: "michael.brown@email.com",
    address: "456 Pine Street, Springfield, IL 62705",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Sarah Brown",
      relationship: "Spouse",
      phone: "(555) 876-5432",
    },
    vitals: {
      bloodPressure: "128/82",
      heartRate: "76",
      temperature: "98.6",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 16, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Asthma symptoms reviewed.",
      },
      {
        date: "Sep 05, 2026",
        doctor: "Dr. Patel",
        type: "Follow-up",
        status: "Scheduled",
        notes: "Review inhaler usage and symptoms.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 16, 2026",
        title: "Asthma consultation",
        description: "Patient reported occasional shortness of breath.",
      },
      {
        date: "May 20, 2026",
        title: "Pulmonary evaluation",
        description: "Lung function reviewed.",
      },
    ],
  },

  {
    id: "PT-10203",
    initials: "OD",
    name: "Olivia Davis",
    age: 28,
    gender: "Female",
    bloodGroup: "B+",
    condition: "Diabetes Type 2",
    dateOfBirth: "January 21, 1998",
    phone: "(555) 345-6789",
    email: "olivia.davis@email.com",
    address: "789 Maple Street, Springfield, IL 62706",
    status: "Stable",
    avatarColor: "purple",
    emergencyContact: {
      name: "James Davis",
      relationship: "Father",
      phone: "(555) 765-4321",
    },
    vitals: {
      bloodPressure: "118/76",
      heartRate: "70",
      temperature: "98.2",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 14, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Completed",
        notes: "Blood glucose reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 14, 2026",
        title: "Routine check-up",
        description: "Blood glucose and diet plan reviewed.",
      },
      {
        date: "Jun 10, 2026",
        title: "Diabetes screening",
        description: "HbA1c levels reviewed.",
      },
    ],
  },

  {
    id: "PT-10204",
    initials: "TP",
    name: "Thomas Peterson",
    age: 55,
    gender: "Male",
    bloodGroup: "AB+",
    condition: "Migraine",
    dateOfBirth: "January 21, 1971",
    phone: "(555) 456-7890",
    email: "thomas.peterson@email.com",
    address: "321 Cedar Avenue, Springfield, IL 62707",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Diana Peterson",
      relationship: "Spouse",
      phone: "(555) 654-3210",
    },
    vitals: {
      bloodPressure: "148/92",
      heartRate: "88",
      temperature: "99.1",
      spo2: "96%",
    },
    appointments: [
      {
        date: "Aug 20, 2026",
        doctor: "Dr. Wilson",
        type: "Neurology",
        status: "Completed",
        notes: "Severe headache episodes reported.",
      },
      {
        date: "Sep 03, 2026",
        doctor: "Dr. Wilson",
        type: "Follow-up",
        status: "Scheduled",
        notes: "Review migraine frequency.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 20, 2026",
        title: "Neurology consultation",
        description: "Patient reported increased migraine frequency.",
      },
      {
        date: "Jul 02, 2026",
        title: "Headache evaluation",
        description: "Recurring migraines discussed.",
      },
    ],
  },

  {
    id: "PT-10205",
    initials: "JS",
    name: "James Smith",
    age: 61,
    gender: "Male",
    bloodGroup: "O-",
    condition: "Coronary Artery Disease",
    dateOfBirth: "February 12, 1965",
    phone: "(555) 567-8901",
    email: "james.smith@email.com",
    address: "88 River Road, Springfield, IL 62708",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Linda Smith",
      relationship: "Spouse",
      phone: "(555) 321-9876",
    },
    vitals: {
      bloodPressure: "158/96",
      heartRate: "94",
      temperature: "98.8",
      spo2: "94%",
    },
    appointments: [
      {
        date: "Aug 25, 2026",
        doctor: "Dr. Carter",
        type: "Cardiology",
        status: "Completed",
        notes: "Chest discomfort evaluated.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 25, 2026",
        title: "Cardiology consultation",
        description: "Chest discomfort and blood pressure reviewed.",
      },
      {
        date: "Jul 14, 2026",
        title: "ECG examination",
        description: "ECG performed and reviewed by cardiology.",
      },
    ],
  },

  {
    id: "PT-10206",
    initials: "ST",
    name: "Sophia Taylor",
    age: 36,
    gender: "Female",
    bloodGroup: "A-",
    condition: "Hypothyroidism",
    dateOfBirth: "April 5, 1990",
    phone: "(555) 678-9012",
    email: "sophia.taylor@email.com",
    address: "145 Willow Lane, Springfield, IL 62709",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Daniel Taylor",
      relationship: "Spouse",
      phone: "(555) 222-3344",
    },
    vitals: {
      bloodPressure: "116/74",
      heartRate: "68",
      temperature: "98.3",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 22, 2026",
        doctor: "Dr. Brown",
        type: "Endocrinology",
        status: "Completed",
        notes: "Thyroid levels reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 22, 2026",
        title: "Thyroid follow-up",
        description: "TSH levels reviewed and medication continued.",
      },
    ],
  },

  {
    id: "PT-10207",
    initials: "DW",
    name: "Daniel Wilson",
    age: 49,
    gender: "Male",
    bloodGroup: "B-",
    condition: "High Cholesterol",
    dateOfBirth: "June 18, 1977",
    phone: "(555) 789-0123",
    email: "daniel.wilson@email.com",
    address: "67 Birch Street, Springfield, IL 62710",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Emma Wilson",
      relationship: "Spouse",
      phone: "(555) 111-2233",
    },
    vitals: {
      bloodPressure: "132/84",
      heartRate: "74",
      temperature: "98.5",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 19, 2026",
        doctor: "Dr. Carter",
        type: "Consultation",
        status: "Completed",
        notes: "Cholesterol levels discussed.",
      },
      {
        date: "Sep 10, 2026",
        doctor: "Dr. Carter",
        type: "Lab Review",
        status: "Scheduled",
        notes: "Review lipid panel.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 19, 2026",
        title: "Cholesterol consultation",
        description: "Lifestyle changes and medication discussed.",
      },
    ],
  },

  {
    id: "PT-10208",
    initials: "EM",
    name: "Emma Martinez",
    age: 24,
    gender: "Female",
    bloodGroup: "O+",
    condition: "Anemia",
    dateOfBirth: "September 9, 2001",
    phone: "(555) 890-1234",
    email: "emma.martinez@email.com",
    address: "201 Lakeview Drive, Springfield, IL 62711",
    status: "Stable",
    avatarColor: "purple",
    emergencyContact: {
      name: "Carlos Martinez",
      relationship: "Father",
      phone: "(555) 444-5566",
    },
    vitals: {
      bloodPressure: "110/70",
      heartRate: "78",
      temperature: "98.1",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 12, 2026",
        doctor: "Dr. Sarah",
        type: "Follow-up",
        status: "Completed",
        notes: "Iron levels reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 12, 2026",
        title: "Anemia follow-up",
        description: "Iron supplementation continued.",
      },
    ],
  },

  {
    id: "PT-10209",
    initials: "RW",
    name: "Robert Williams",
    age: 67,
    gender: "Male",
    bloodGroup: "AB-",
    condition: "Arthritis",
    dateOfBirth: "October 14, 1958",
    phone: "(555) 901-2345",
    email: "robert.williams@email.com",
    address: "43 Elm Street, Springfield, IL 62712",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Mary Williams",
      relationship: "Spouse",
      phone: "(555) 777-8899",
    },
    vitals: {
      bloodPressure: "126/80",
      heartRate: "73",
      temperature: "98.4",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 11, 2026",
        doctor: "Dr. Adams",
        type: "Orthopedic",
        status: "Completed",
        notes: "Knee pain evaluated.",
      },
      {
        date: "Sep 12, 2026",
        doctor: "Dr. Adams",
        type: "Follow-up",
        status: "Scheduled",
        notes: "Evaluate mobility.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 11, 2026",
        title: "Arthritis consultation",
        description: "Knee pain and mobility issues reviewed.",
      },
    ],
  },

  {
    id: "PT-10210",
    initials: "AM",
    name: "Ava Miller",
    age: 31,
    gender: "Female",
    bloodGroup: "B+",
    condition: "PCOS",
    dateOfBirth: "March 22, 1995",
    phone: "(555) 112-3456",
    email: "ava.miller@email.com",
    address: "92 Garden Street, Springfield, IL 62713",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "John Miller",
      relationship: "Brother",
      phone: "(555) 223-4567",
    },
    vitals: {
      bloodPressure: "114/72",
      heartRate: "71",
      temperature: "98.2",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 09, 2026",
        doctor: "Dr. Clark",
        type: "Gynecology",
        status: "Completed",
        notes: "Symptoms and hormone profile reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 09, 2026",
        title: "Gynecology consultation",
        description: "PCOS symptoms and lifestyle plan reviewed.",
      },
    ],
  },

  {
    id: "PT-10211",
    initials: "CH",
    name: "Christopher Harris",
    age: 42,
    gender: "Male",
    bloodGroup: "A+",
    condition: "GERD",
    dateOfBirth: "May 30, 1984",
    phone: "(555) 334-5678",
    email: "christopher.harris@email.com",
    address: "18 Forest Avenue, Springfield, IL 62714",
    status: "Stable",
    avatarColor: "purple",
    emergencyContact: {
      name: "Jessica Harris",
      relationship: "Spouse",
      phone: "(555) 445-6789",
    },
    vitals: {
      bloodPressure: "122/78",
      heartRate: "75",
      temperature: "98.5",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 17, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Acid reflux symptoms improved.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 17, 2026",
        title: "GERD consultation",
        description: "Dietary triggers and medication reviewed.",
      },
    ],
  },

  {
    id: "PT-10212",
    initials: "IW",
    name: "Isabella White",
    age: 29,
    gender: "Female",
    bloodGroup: "O-",
    condition: "Vitamin D Deficiency",
    dateOfBirth: "July 11, 1997",
    phone: "(555) 556-7890",
    email: "isabella.white@email.com",
    address: "72 Meadow Road, Springfield, IL 62715",
    status: "Stable",
    avatarColor: "green",
    emergencyContact: {
      name: "George White",
      relationship: "Father",
      phone: "(555) 667-8901",
    },
    vitals: {
      bloodPressure: "112/74",
      heartRate: "69",
      temperature: "98.2",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 13, 2026",
        doctor: "Dr. Brown",
        type: "Lab Review",
        status: "Completed",
        notes: "Vitamin D supplementation continued.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 13, 2026",
        title: "Lab review",
        description: "Vitamin D levels reviewed.",
      },
    ],
  },

  {
    id: "PT-10213",
    initials: "AW",
    name: "Alexander Walker",
    age: 58,
    gender: "Male",
    bloodGroup: "A-",
    condition: "COPD",
    dateOfBirth: "August 25, 1967",
    phone: "(555) 778-9012",
    email: "alexander.walker@email.com",
    address: "115 Hilltop Lane, Springfield, IL 62716",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Nancy Walker",
      relationship: "Spouse",
      phone: "(555) 889-0123",
    },
    vitals: {
      bloodPressure: "142/88",
      heartRate: "91",
      temperature: "99.0",
      spo2: "92%",
    },
    appointments: [
      {
        date: "Aug 27, 2026",
        doctor: "Dr. Patel",
        type: "Pulmonary",
        status: "Completed",
        notes: "Breathing difficulty reported.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 27, 2026",
        title: "Pulmonary consultation",
        description: "COPD symptoms and oxygen saturation reviewed.",
      },
      {
        date: "Jul 05, 2026",
        title: "Respiratory evaluation",
        description: "Breathing function evaluated.",
      },
    ],
  },

  {
    id: "PT-10214",
    initials: "MG",
    name: "Mia Garcia",
    age: 22,
    gender: "Female",
    bloodGroup: "B-",
    condition: "Allergic Rhinitis",
    dateOfBirth: "December 3, 2003",
    phone: "(555) 890-1122",
    email: "mia.garcia@email.com",
    address: "34 Sunset Boulevard, Springfield, IL 62717",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Luis Garcia",
      relationship: "Father",
      phone: "(555) 901-2233",
    },
    vitals: {
      bloodPressure: "108/68",
      heartRate: "70",
      temperature: "98.0",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 10, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Seasonal allergy symptoms reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 10, 2026",
        title: "Allergy consultation",
        description: "Seasonal allergies discussed.",
      },
    ],
  },

  {
    id: "PT-10215",
    initials: "LW",
    name: "Liam Wilson",
    age: 39,
    gender: "Male",
    bloodGroup: "O+",
    condition: "Back Pain",
    dateOfBirth: "February 18, 1987",
    phone: "(555) 123-7788",
    email: "liam.wilson@email.com",
    address: "61 Park Avenue, Springfield, IL 62718",
    status: "Follow-Up",
    avatarColor: "purple",
    emergencyContact: {
      name: "Grace Wilson",
      relationship: "Spouse",
      phone: "(555) 234-8899",
    },
    vitals: {
      bloodPressure: "124/80",
      heartRate: "77",
      temperature: "98.6",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 23, 2026",
        doctor: "Dr. Adams",
        type: "Physiotherapy",
        status: "Completed",
        notes: "Lower back pain improving.",
      },
      {
        date: "Sep 06, 2026",
        doctor: "Dr. Adams",
        type: "Follow-up",
        status: "Scheduled",
        notes: "Assess physical therapy progress.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 23, 2026",
        title: "Physiotherapy evaluation",
        description: "Lower back pain evaluated.",
      },
    ],
  },

  {
    id: "PT-10216",
    initials: "SC",
    name: "Charlotte Clark",
    age: 47,
    gender: "Female",
    bloodGroup: "AB+",
    condition: "Osteoporosis",
    dateOfBirth: "March 6, 1979",
    phone: "(555) 345-8899",
    email: "charlotte.clark@email.com",
    address: "29 Rose Street, Springfield, IL 62719",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Henry Clark",
      relationship: "Spouse",
      phone: "(555) 456-9900",
    },
    vitals: {
      bloodPressure: "130/82",
      heartRate: "74",
      temperature: "98.4",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 21, 2026",
        doctor: "Dr. Adams",
        type: "Bone Health",
        status: "Completed",
        notes: "Bone density reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 21, 2026",
        title: "Bone health consultation",
        description: "Bone density results reviewed.",
      },
    ],
  },

  {
    id: "PT-10217",
    initials: "BJ",
    name: "Benjamin Jones",
    age: 63,
    gender: "Male",
    bloodGroup: "A+",
    condition: "Type 2 Diabetes",
    dateOfBirth: "May 19, 1963",
    phone: "(555) 567-9911",
    email: "benjamin.jones@email.com",
    address: "84 Franklin Street, Springfield, IL 62720",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Helen Jones",
      relationship: "Spouse",
      phone: "(555) 678-0022",
    },
    vitals: {
      bloodPressure: "150/90",
      heartRate: "89",
      temperature: "98.9",
      spo2: "95%",
    },
    appointments: [
      {
        date: "Aug 28, 2026",
        doctor: "Dr. Sarah",
        type: "Diabetes Review",
        status: "Completed",
        notes: "Blood glucose elevated.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 28, 2026",
        title: "Diabetes review",
        description: "Blood glucose levels were elevated.",
      },
      {
        date: "Jul 15, 2026",
        title: "Lab work",
        description: "HbA1c test completed.",
      },
    ],
  },

  {
    id: "PT-10218",
    initials: "AM",
    name: "Amelia Moore",
    age: 34,
    gender: "Female",
    bloodGroup: "O+",
    condition: "Anxiety",
    dateOfBirth: "October 2, 1991",
    phone: "(555) 789-0033",
    email: "amelia.moore@email.com",
    address: "17 Lincoln Avenue, Springfield, IL 62721",
    status: "Stable",
    avatarColor: "purple",
    emergencyContact: {
      name: "David Moore",
      relationship: "Brother",
      phone: "(555) 890-1144",
    },
    vitals: {
      bloodPressure: "118/76",
      heartRate: "79",
      temperature: "98.3",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 24, 2026",
        doctor: "Dr. Green",
        type: "Consultation",
        status: "Completed",
        notes: "Stress management discussed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 24, 2026",
        title: "Mental health consultation",
        description: "Stress and sleep patterns reviewed.",
      },
    ],
  },

  {
    id: "PT-10219",
    initials: "EH",
    name: "Ethan Hall",
    age: 27,
    gender: "Male",
    bloodGroup: "B+",
    condition: "Gastritis",
    dateOfBirth: "June 14, 1999",
    phone: "(555) 901-2255",
    email: "ethan.hall@email.com",
    address: "53 Adams Street, Springfield, IL 62722",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Rachel Hall",
      relationship: "Mother",
      phone: "(555) 112-3366",
    },
    vitals: {
      bloodPressure: "116/72",
      heartRate: "72",
      temperature: "98.4",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 15, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Stomach discomfort improved.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 15, 2026",
        title: "Gastritis consultation",
        description: "Diet and medication reviewed.",
      },
    ],
  },

  {
    id: "PT-10220",
    initials: "SO",
    name: "Samantha Ortiz",
    age: 52,
    gender: "Female",
    bloodGroup: "A-",
    condition: "Hypertension",
    dateOfBirth: "November 27, 1973",
    phone: "(555) 223-4477",
    email: "samantha.ortiz@email.com",
    address: "91 Madison Road, Springfield, IL 62723",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Carlos Ortiz",
      relationship: "Spouse",
      phone: "(555) 334-5588",
    },
    vitals: {
      bloodPressure: "136/86",
      heartRate: "78",
      temperature: "98.5",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 26, 2026",
        doctor: "Dr. Sarah",
        type: "Follow-up",
        status: "Completed",
        notes: "Blood pressure slightly elevated.",
      },
      {
        date: "Sep 15, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Scheduled",
        notes: "Repeat blood pressure measurement.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 26, 2026",
        title: "Hypertension follow-up",
        description: "Blood pressure and medication reviewed.",
      },
    ],
  },

  {
    id: "PT-10221",
    initials: "NO",
    name: "Noah Anderson",
    age: 41,
    gender: "Male",
    bloodGroup: "AB+",
    condition: "Sleep Apnea",
    dateOfBirth: "January 10, 1985",
    phone: "(555) 445-6699",
    email: "noah.anderson@email.com",
    address: "64 Jefferson Street, Springfield, IL 62724",
    status: "Follow-Up",
    avatarColor: "purple",
    emergencyContact: {
      name: "Laura Anderson",
      relationship: "Spouse",
      phone: "(555) 556-7700",
    },
    vitals: {
      bloodPressure: "130/84",
      heartRate: "80",
      temperature: "98.6",
      spo2: "95%",
    },
    appointments: [
      {
        date: "Aug 29, 2026",
        doctor: "Dr. Patel",
        type: "Sleep Study",
        status: "Completed",
        notes: "Sleep quality reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 29, 2026",
        title: "Sleep consultation",
        description: "Sleep apnea symptoms evaluated.",
      },
    ],
  },

  {
    id: "PT-10222",
    initials: "EV",
    name: "Evelyn Thomas",
    age: 70,
    gender: "Female",
    bloodGroup: "O+",
    condition: "Heart Failure",
    dateOfBirth: "September 17, 1955",
    phone: "(555) 667-8811",
    email: "evelyn.thomas@email.com",
    address: "12 Washington Avenue, Springfield, IL 62725",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Mark Thomas",
      relationship: "Son",
      phone: "(555) 778-9922",
    },
    vitals: {
      bloodPressure: "156/94",
      heartRate: "96",
      temperature: "99.0",
      spo2: "91%",
    },
    appointments: [
      {
        date: "Aug 30, 2026",
        doctor: "Dr. Carter",
        type: "Cardiology",
        status: "Completed",
        notes: "Swelling and shortness of breath noted.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 30, 2026",
        title: "Cardiology follow-up",
        description: "Heart failure symptoms reviewed.",
      },
    ],
  },

  {
    id: "PT-10223",
    initials: "LB",
    name: "Lucas Baker",
    age: 33,
    gender: "Male",
    bloodGroup: "B-",
    condition: "Kidney Stones",
    dateOfBirth: "April 29, 1993",
    phone: "(555) 889-0033",
    email: "lucas.baker@email.com",
    address: "45 Chestnut Street, Springfield, IL 62726",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Megan Baker",
      relationship: "Sister",
      phone: "(555) 990-1144",
    },
    vitals: {
      bloodPressure: "122/78",
      heartRate: "76",
      temperature: "98.7",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 18, 2026",
        doctor: "Dr. Lee",
        type: "Urology",
        status: "Completed",
        notes: "Kidney stone symptoms improved.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 18, 2026",
        title: "Urology consultation",
        description: "Kidney stone symptoms evaluated.",
      },
    ],
  },

  {
    id: "PT-10224",
    initials: "HG",
    name: "Harper Green",
    age: 26,
    gender: "Female",
    bloodGroup: "A+",
    condition: "Asthma",
    dateOfBirth: "August 8, 2000",
    phone: "(555) 101-2255",
    email: "harper.green@email.com",
    address: "76 Oak Avenue, Springfield, IL 62727",
    status: "Stable",
    avatarColor: "green",
    emergencyContact: {
      name: "Andrew Green",
      relationship: "Father",
      phone: "(555) 212-3366",
    },
    vitals: {
      bloodPressure: "114/70",
      heartRate: "73",
      temperature: "98.2",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 19, 2026",
        doctor: "Dr. Patel",
        type: "Follow-up",
        status: "Completed",
        notes: "Asthma controlled.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 19, 2026",
        title: "Asthma follow-up",
        description: "No recent severe attacks reported.",
      },
    ],
  },

  {
    id: "PT-10225",
    initials: "HM",
    name: "Henry Martin",
    age: 59,
    gender: "Male",
    bloodGroup: "O-",
    condition: "Hypertension",
    dateOfBirth: "December 21, 1966",
    phone: "(555) 323-4477",
    email: "henry.martin@email.com",
    address: "88 King Street, Springfield, IL 62728",
    status: "Follow-Up",
    avatarColor: "purple",
    emergencyContact: {
      name: "Patricia Martin",
      relationship: "Spouse",
      phone: "(555) 434-5588",
    },
    vitals: {
      bloodPressure: "140/88",
      heartRate: "82",
      temperature: "98.6",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 22, 2026",
        doctor: "Dr. Sarah",
        type: "Check-up",
        status: "Completed",
        notes: "BP remains mildly elevated.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 22, 2026",
        title: "Blood pressure check",
        description: "Medication adherence discussed.",
      },
    ],
  },

  {
    id: "PT-10226",
    initials: "AL",
    name: "Abigail Lee",
    age: 38,
    gender: "Female",
    bloodGroup: "AB-",
    condition: "Hypothyroidism",
    dateOfBirth: "February 4, 1988",
    phone: "(555) 545-6699",
    email: "abigail.lee@email.com",
    address: "19 Maple Avenue, Springfield, IL 62729",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Kevin Lee",
      relationship: "Spouse",
      phone: "(555) 656-7700",
    },
    vitals: {
      bloodPressure: "118/74",
      heartRate: "69",
      temperature: "98.3",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 20, 2026",
        doctor: "Dr. Brown",
        type: "Endocrinology",
        status: "Completed",
        notes: "Thyroid medication continued.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 20, 2026",
        title: "Thyroid review",
        description: "Thyroid function tests reviewed.",
      },
    ],
  },

  {
    id: "PT-10227",
    initials: "JD",
    name: "Jack Davis",
    age: 44,
    gender: "Male",
    bloodGroup: "A+",
    condition: "High Cholesterol",
    dateOfBirth: "July 26, 1982",
    phone: "(555) 767-8811",
    email: "jack.davis@email.com",
    address: "32 Walnut Street, Springfield, IL 62730",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Anna Davis",
      relationship: "Spouse",
      phone: "(555) 878-9922",
    },
    vitals: {
      bloodPressure: "128/82",
      heartRate: "75",
      temperature: "98.4",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 24, 2026",
        doctor: "Dr. Carter",
        type: "Lab Review",
        status: "Completed",
        notes: "Cholesterol slightly elevated.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 24, 2026",
        title: "Lipid panel review",
        description: "Cholesterol levels reviewed.",
      },
    ],
  },

  {
    id: "PT-10228",
    initials: "SS",
    name: "Scarlett Scott",
    age: 30,
    gender: "Female",
    bloodGroup: "O+",
    condition: "Migraine",
    dateOfBirth: "October 13, 1995",
    phone: "(555) 989-0033",
    email: "scarlett.scott@email.com",
    address: "56 Pine Avenue, Springfield, IL 62731",
    status: "Stable",
    avatarColor: "purple",
    emergencyContact: {
      name: "Ryan Scott",
      relationship: "Brother",
      phone: "(555) 100-1144",
    },
    vitals: {
      bloodPressure: "116/74",
      heartRate: "72",
      temperature: "98.1",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 16, 2026",
        doctor: "Dr. Wilson",
        type: "Neurology",
        status: "Completed",
        notes: "Migraine frequency reduced.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 16, 2026",
        title: "Migraine follow-up",
        description: "Patient reports fewer migraine episodes.",
      },
    ],
  },

  {
    id: "PT-10229",
    initials: "MW",
    name: "Matthew Wright",
    age: 56,
    gender: "Male",
    bloodGroup: "B+",
    condition: "Diabetes Type 2",
    dateOfBirth: "March 12, 1970",
    phone: "(555) 211-2255",
    email: "matthew.wright@email.com",
    address: "73 Cedar Lane, Springfield, IL 62732",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Susan Wright",
      relationship: "Spouse",
      phone: "(555) 322-3366",
    },
    vitals: {
      bloodPressure: "152/92",
      heartRate: "90",
      temperature: "98.9",
      spo2: "95%",
    },
    appointments: [
      {
        date: "Aug 28, 2026",
        doctor: "Dr. Sarah",
        type: "Diabetes Review",
        status: "Completed",
        notes: "Glucose levels remain high.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 28, 2026",
        title: "Diabetes consultation",
        description: "Blood glucose management discussed.",
      },
    ],
  },

  {
    id: "PT-10230",
    initials: "CH",
    name: "Chloe Hill",
    age: 25,
    gender: "Female",
    bloodGroup: "A-",
    condition: "Anemia",
    dateOfBirth: "May 8, 2001",
    phone: "(555) 433-4477",
    email: "chloe.hill@email.com",
    address: "14 Birch Road, Springfield, IL 62733",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Mark Hill",
      relationship: "Father",
      phone: "(555) 544-5588",
    },
    vitals: {
      bloodPressure: "110/70",
      heartRate: "77",
      temperature: "98.2",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 11, 2026",
        doctor: "Dr. Sarah",
        type: "Lab Review",
        status: "Completed",
        notes: "Iron levels improving.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 11, 2026",
        title: "Anemia follow-up",
        description: "Iron levels show improvement.",
      },
    ],
  },

  {
    id: "PT-10231",
    initials: "DH",
    name: "David Hill",
    age: 48,
    gender: "Male",
    bloodGroup: "O+",
    condition: "GERD",
    dateOfBirth: "September 23, 1977",
    phone: "(555) 655-6699",
    email: "david.hill@email.com",
    address: "95 Spring Street, Springfield, IL 62734",
    status: "Stable",
    avatarColor: "green",
    emergencyContact: {
      name: "Lisa Hill",
      relationship: "Spouse",
      phone: "(555) 766-7700",
    },
    vitals: {
      bloodPressure: "124/78",
      heartRate: "74",
      temperature: "98.5",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 18, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "GERD symptoms controlled.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 18, 2026",
        title: "GERD review",
        description: "Symptoms improved with treatment.",
      },
    ],
  },

  {
    id: "PT-10232",
    initials: "LH",
    name: "Lily Hernandez",
    age: 35,
    gender: "Female",
    bloodGroup: "B-",
    condition: "PCOS",
    dateOfBirth: "January 31, 1991",
    phone: "(555) 877-8811",
    email: "lily.hernandez@email.com",
    address: "28 River Street, Springfield, IL 62735",
    status: "Follow-Up",
    avatarColor: "purple",
    emergencyContact: {
      name: "Daniel Hernandez",
      relationship: "Spouse",
      phone: "(555) 988-9922",
    },
    vitals: {
      bloodPressure: "120/78",
      heartRate: "76",
      temperature: "98.4",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 23, 2026",
        doctor: "Dr. Clark",
        type: "Gynecology",
        status: "Completed",
        notes: "Hormone levels reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 23, 2026",
        title: "PCOS follow-up",
        description: "Hormonal symptoms and lifestyle discussed.",
      },
    ],
  },

  {
    id: "PT-10233",
    initials: "AG",
    name: "Anthony Garcia",
    age: 62,
    gender: "Male",
    bloodGroup: "AB+",
    condition: "Arthritis",
    dateOfBirth: "April 17, 1964",
    phone: "(555) 199-0033",
    email: "anthony.garcia@email.com",
    address: "81 Lake Road, Springfield, IL 62736",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Maria Garcia",
      relationship: "Spouse",
      phone: "(555) 200-1144",
    },
    vitals: {
      bloodPressure: "130/82",
      heartRate: "78",
      temperature: "98.6",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 25, 2026",
        doctor: "Dr. Adams",
        type: "Orthopedic",
        status: "Completed",
        notes: "Joint pain reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 25, 2026",
        title: "Orthopedic consultation",
        description: "Joint stiffness and pain evaluated.",
      },
    ],
  },

  {
    id: "PT-10234",
    initials: "NS",
    name: "Nora Smith",
    age: 43,
    gender: "Female",
    bloodGroup: "O-",
    condition: "Asthma",
    dateOfBirth: "June 9, 1983",
    phone: "(555) 311-2255",
    email: "nora.smith@email.com",
    address: "36 Forest Road, Springfield, IL 62737",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Peter Smith",
      relationship: "Spouse",
      phone: "(555) 422-3366",
    },
    vitals: {
      bloodPressure: "118/76",
      heartRate: "72",
      temperature: "98.3",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 21, 2026",
        doctor: "Dr. Patel",
        type: "Follow-up",
        status: "Completed",
        notes: "Asthma symptoms stable.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 21, 2026",
        title: "Asthma follow-up",
        description: "Symptoms remain well controlled.",
      },
    ],
  },

  {
    id: "PT-10235",
    initials: "SA",
    name: "Samuel Adams",
    age: 51,
    gender: "Male",
    bloodGroup: "A+",
    condition: "Hypertension",
    dateOfBirth: "August 30, 1974",
    phone: "(555) 533-4477",
    email: "samuel.adams@email.com",
    address: "109 Main Street, Springfield, IL 62738",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Rachel Adams",
      relationship: "Spouse",
      phone: "(555) 644-5588",
    },
    vitals: {
      bloodPressure: "162/98",
      heartRate: "98",
      temperature: "98.8",
      spo2: "94%",
    },
    appointments: [
      {
        date: "Aug 31, 2026",
        doctor: "Dr. Sarah",
        type: "Urgent Follow-up",
        status: "Completed",
        notes: "Blood pressure significantly elevated.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 31, 2026",
        title: "Urgent hypertension review",
        description: "Significantly elevated blood pressure detected.",
      },
    ],
  },

  {
    id: "PT-10236",
    initials: "EG",
    name: "Ella Garcia",
    age: 29,
    gender: "Female",
    bloodGroup: "A+",
    condition: "Migraine",
    dateOfBirth: "November 15, 1996",
    phone: "(555) 755-6699",
    email: "ella.garcia@email.com",
    address: "42 Green Street, Springfield, IL 62739",
    status: "Stable",
    avatarColor: "purple",
    emergencyContact: {
      name: "Sofia Garcia",
      relationship: "Sister",
      phone: "(555) 866-7700",
    },
    vitals: {
      bloodPressure: "115/72",
      heartRate: "70",
      temperature: "98.2",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 20, 2026",
        doctor: "Dr. Wilson",
        type: "Neurology",
        status: "Completed",
        notes: "Headaches less frequent.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 20, 2026",
        title: "Migraine follow-up",
        description: "Frequency of headaches has decreased.",
      },
    ],
  },

  {
    id: "PT-10237",
    initials: "JO",
    name: "Joseph Ortiz",
    age: 46,
    gender: "Male",
    bloodGroup: "B+",
    condition: "High Cholesterol",
    dateOfBirth: "March 28, 1980",
    phone: "(555) 977-8811",
    email: "joseph.ortiz@email.com",
    address: "63 Clinton Avenue, Springfield, IL 62740",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Elena Ortiz",
      relationship: "Spouse",
      phone: "(555) 188-9922",
    },
    vitals: {
      bloodPressure: "126/80",
      heartRate: "73",
      temperature: "98.5",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 26, 2026",
        doctor: "Dr. Carter",
        type: "Lab Review",
        status: "Completed",
        notes: "Lipid profile reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 26, 2026",
        title: "Cholesterol follow-up",
        description: "Lipid profile reviewed.",
      },
    ],
  },

  {
    id: "PT-10238",
    initials: "GH",
    name: "Grace Hernandez",
    age: 33,
    gender: "Female",
    bloodGroup: "O+",
    condition: "Hypothyroidism",
    dateOfBirth: "July 5, 1993",
    phone: "(555) 299-0033",
    email: "grace.hernandez@email.com",
    address: "27 Rose Avenue, Springfield, IL 62741",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Michael Hernandez",
      relationship: "Spouse",
      phone: "(555) 300-1144",
    },
    vitals: {
      bloodPressure: "117/73",
      heartRate: "68",
      temperature: "98.2",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 17, 2026",
        doctor: "Dr. Brown",
        type: "Endocrinology",
        status: "Completed",
        notes: "Thyroid levels stable.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 17, 2026",
        title: "Thyroid check",
        description: "Thyroid levels remain stable.",
      },
    ],
  },

  {
    id: "PT-10239",
    initials: "BA",
    name: "Benjamin Adams",
    age: 68,
    gender: "Male",
    bloodGroup: "O+",
    condition: "Heart Failure",
    dateOfBirth: "October 20, 1957",
    phone: "(555) 411-2255",
    email: "benjamin.adams@email.com",
    address: "90 Jefferson Road, Springfield, IL 62742",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Carol Adams",
      relationship: "Spouse",
      phone: "(555) 522-3366",
    },
    vitals: {
      bloodPressure: "150/92",
      heartRate: "94",
      temperature: "98.9",
      spo2: "92%",
    },
    appointments: [
      {
        date: "Aug 30, 2026",
        doctor: "Dr. Carter",
        type: "Cardiology",
        status: "Completed",
        notes: "Shortness of breath evaluated.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 30, 2026",
        title: "Cardiology review",
        description: "Heart failure symptoms assessed.",
      },
    ],
  },

  {
    id: "PT-10240",
    initials: "SW",
    name: "Sophie Williams",
    age: 21,
    gender: "Female",
    bloodGroup: "B+",
    condition: "Vitamin D Deficiency",
    dateOfBirth: "May 22, 2005",
    phone: "(555) 633-4477",
    email: "sophie.williams@email.com",
    address: "15 King Avenue, Springfield, IL 62743",
    status: "Stable",
    avatarColor: "purple",
    emergencyContact: {
      name: "David Williams",
      relationship: "Father",
      phone: "(555) 744-5588",
    },
    vitals: {
      bloodPressure: "109/69",
      heartRate: "71",
      temperature: "98.1",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 12, 2026",
        doctor: "Dr. Brown",
        type: "Lab Review",
        status: "Completed",
        notes: "Supplementation recommended.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 12, 2026",
        title: "Vitamin D evaluation",
        description: "Low vitamin D levels identified.",
      },
    ],
  },

  {
    id: "PT-10241",
    initials: "DM",
    name: "Daniel Miller",
    age: 37,
    gender: "Male",
    bloodGroup: "A-",
    condition: "Back Pain",
    dateOfBirth: "January 17, 1989",
    phone: "(555) 855-6699",
    email: "daniel.miller@email.com",
    address: "74 Washington Street, Springfield, IL 62744",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Rachel Miller",
      relationship: "Spouse",
      phone: "(555) 966-7700",
    },
    vitals: {
      bloodPressure: "121/79",
      heartRate: "76",
      temperature: "98.4",
      spo2: "98%",
    },
    appointments: [
      {
        date: "Aug 27, 2026",
        doctor: "Dr. Adams",
        type: "Physiotherapy",
        status: "Completed",
        notes: "Mobility improving.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 27, 2026",
        title: "Back pain review",
        description: "Mobility and pain levels evaluated.",
      },
    ],
  },

  {
    id: "PT-10242",
    initials: "EW",
    name: "Elizabeth Wilson",
    age: 54,
    gender: "Female",
    bloodGroup: "AB+",
    condition: "Diabetes Type 2",
    dateOfBirth: "June 25, 1972",
    phone: "(555) 177-8811",
    email: "elizabeth.wilson@email.com",
    address: "38 Adams Avenue, Springfield, IL 62745",
    status: "Follow-Up",
    avatarColor: "blue",
    emergencyContact: {
      name: "Thomas Wilson",
      relationship: "Spouse",
      phone: "(555) 288-9922",
    },
    vitals: {
      bloodPressure: "134/84",
      heartRate: "79",
      temperature: "98.6",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 29, 2026",
        doctor: "Dr. Sarah",
        type: "Diabetes Review",
        status: "Completed",
        notes: "Blood glucose reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 29, 2026",
        title: "Diabetes follow-up",
        description: "Glucose control discussed.",
      },
    ],
  },

  {
    id: "PT-10243",
    initials: "JW",
    name: "Jacob Thompson",
    age: 60,
    gender: "Male",
    bloodGroup: "O-",
    condition: "COPD",
    dateOfBirth: "December 6, 1965",
    phone: "(555) 399-0033",
    email: "jacob.thompson@email.com",
    address: "52 Lincoln Street, Springfield, IL 62746",
    status: "Critical",
    avatarColor: "red",
    emergencyContact: {
      name: "Susan Thompson",
      relationship: "Spouse",
      phone: "(555) 400-1144",
    },
    vitals: {
      bloodPressure: "146/90",
      heartRate: "93",
      temperature: "99.2",
      spo2: "91%",
    },
    appointments: [
      {
        date: "Aug 31, 2026",
        doctor: "Dr. Patel",
        type: "Pulmonary",
        status: "Completed",
        notes: "Oxygen saturation below baseline.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 31, 2026",
        title: "Pulmonary review",
        description: "Oxygen saturation and breathing reviewed.",
      },
    ],
  },

  {
    id: "PT-10244",
    initials: "CM",
    name: "Camila Moore",
    age: 32,
    gender: "Female",
    bloodGroup: "A+",
    condition: "Allergic Rhinitis",
    dateOfBirth: "September 12, 1994",
    phone: "(555) 511-2255",
    email: "camila.moore@email.com",
    address: "67 Madison Street, Springfield, IL 62747",
    status: "Stable",
    avatarColor: "green",
    emergencyContact: {
      name: "Robert Moore",
      relationship: "Brother",
      phone: "(555) 622-3366",
    },
    vitals: {
      bloodPressure: "115/72",
      heartRate: "70",
      temperature: "98.2",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 14, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Allergy symptoms controlled.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 14, 2026",
        title: "Allergy consultation",
        description: "Seasonal allergy symptoms reviewed.",
      },
    ],
  },

  {
    id: "PT-10245",
    initials: "WM",
    name: "William Martin",
    age: 73,
    gender: "Male",
    bloodGroup: "B+",
    condition: "Arthritis",
    dateOfBirth: "February 28, 1953",
    phone: "(555) 733-4477",
    email: "william.martin@email.com",
    address: "83 Oak Lane, Springfield, IL 62748",
    status: "Follow-Up",
    avatarColor: "purple",
    emergencyContact: {
      name: "Margaret Martin",
      relationship: "Spouse",
      phone: "(555) 844-5588",
    },
    vitals: {
      bloodPressure: "132/84",
      heartRate: "77",
      temperature: "98.5",
      spo2: "96%",
    },
    appointments: [
      {
        date: "Aug 23, 2026",
        doctor: "Dr. Adams",
        type: "Orthopedic",
        status: "Completed",
        notes: "Knee mobility reviewed.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 23, 2026",
        title: "Arthritis consultation",
        description: "Knee mobility and pain reviewed.",
      },
    ],
  },

  {
    id: "PT-10246",
    initials: "AR",
    name: "Avery Robinson",
    age: 28,
    gender: "Female",
    bloodGroup: "O+",
    condition: "Anemia",
    dateOfBirth: "April 10, 1998",
    phone: "(555) 955-6699",
    email: "avery.robinson@email.com",
    address: "21 River Avenue, Springfield, IL 62749",
    status: "Stable",
    avatarColor: "blue",
    emergencyContact: {
      name: "Kevin Robinson",
      relationship: "Brother",
      phone: "(555) 166-7700",
    },
    vitals: {
      bloodPressure: "111/71",
      heartRate: "75",
      temperature: "98.1",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 18, 2026",
        doctor: "Dr. Sarah",
        type: "Lab Review",
        status: "Completed",
        notes: "Hemoglobin improving.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 18, 2026",
        title: "Anemia follow-up",
        description: "Hemoglobin levels improving.",
      },
    ],
  },

  {
    id: "PT-10247",
    initials: "JM",
    name: "Jonathan Mitchell",
    age: 50,
    gender: "Male",
    bloodGroup: "A-",
    condition: "Hypertension",
    dateOfBirth: "July 19, 1976",
    phone: "(555) 277-8811",
    email: "jonathan.mitchell@email.com",
    address: "46 Pine Street, Springfield, IL 62750",
    status: "Follow-Up",
    avatarColor: "green",
    emergencyContact: {
      name: "Karen Mitchell",
      relationship: "Spouse",
      phone: "(555) 388-9922",
    },
    vitals: {
      bloodPressure: "138/86",
      heartRate: "81",
      temperature: "98.6",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 25, 2026",
        doctor: "Dr. Sarah",
        type: "Follow-up",
        status: "Completed",
        notes: "BP improved from previous visit.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 25, 2026",
        title: "Hypertension follow-up",
        description: "Blood pressure improved with medication.",
      },
    ],
  },

  {
    id: "PT-10248",
    initials: "VC",
    name: "Victoria Carter",
    age: 40,
    gender: "Female",
    bloodGroup: "AB+",
    condition: "GERD",
    dateOfBirth: "October 5, 1985",
    phone: "(555) 499-0033",
    email: "victoria.carter@email.com",
    address: "59 Maple Lane, Springfield, IL 62751",
    status: "Stable",
    avatarColor: "purple",
    emergencyContact: {
      name: "James Carter",
      relationship: "Spouse",
      phone: "(555) 500-1144",
    },
    vitals: {
      bloodPressure: "119/75",
      heartRate: "72",
      temperature: "98.4",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 20, 2026",
        doctor: "Dr. Patel",
        type: "Consultation",
        status: "Completed",
        notes: "Acid reflux controlled.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 20, 2026",
        title: "GERD consultation",
        description: "Diet and treatment plan reviewed.",
      },
    ],
  },

  {
    id: "PT-10249",
    initials: "CM",
    name: "Christopher Morgan",
    age: 57,
    gender: "Male",
    bloodGroup: "O+",
    condition: "High Cholesterol",
    dateOfBirth: "March 16, 1969",
    phone: "(555) 611-2255",
    email: "christopher.morgan@email.com",
    address: "71 Cedar Street, Springfield, IL 62752",
    status: "Follow-Up",
    avatarColor: "blue",
    emergencyContact: {
      name: "Jennifer Morgan",
      relationship: "Spouse",
      phone: "(555) 722-3366",
    },
    vitals: {
      bloodPressure: "130/82",
      heartRate: "76",
      temperature: "98.5",
      spo2: "97%",
    },
    appointments: [
      {
        date: "Aug 27, 2026",
        doctor: "Dr. Carter",
        type: "Lab Review",
        status: "Completed",
        notes: "Cholesterol trending downward.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 27, 2026",
        title: "Lipid review",
        description: "Cholesterol levels improving.",
      },
    ],
  },

  {
    id: "PT-10250",
    initials: "RM",
    name: "Rachel Morgan",
    age: 36,
    gender: "Female",
    bloodGroup: "B+",
    condition: "PCOS",
    dateOfBirth: "November 2, 1989",
    phone: "(555) 833-4477",
    email: "rachel.morgan@email.com",
    address: "93 Garden Avenue, Springfield, IL 62753",
    status: "Stable",
    avatarColor: "green",
    emergencyContact: {
      name: "Andrew Morgan",
      relationship: "Spouse",
      phone: "(555) 944-5588",
    },
    vitals: {
      bloodPressure: "117/74",
      heartRate: "73",
      temperature: "98.3",
      spo2: "99%",
    },
    appointments: [
      {
        date: "Aug 22, 2026",
        doctor: "Dr. Clark",
        type: "Gynecology",
        status: "Completed",
        notes: "Symptoms stable.",
      },
    ],
    medicalHistory: [
      {
        date: "Aug 22, 2026",
        title: "PCOS consultation",
        description: "Symptoms and lifestyle management reviewed.",
      },
    ],
  },
];

export const todaysAppointments: TodaysAppointment[] = [
  {
    patientId: "PT-10201",
    initials: "EJ",
    patient: "Emily Johnson",
    time: "09:30 AM",
    type: "Follow-up",
    status: "Confirmed",
    avatarColor: "blue",
  },
  {
    patientId: "PT-10202",
    initials: "MB",
    patient: "Michael Brown",
    time: "10:15 AM",
    type: "Consultation",
    status: "Waiting",
    avatarColor: "green",
  },
  {
    patientId: "PT-10203",
    initials: "OD",
    patient: "Olivia Davis",
    time: "11:00 AM",
    type: "Check-up",
    status: "Confirmed",
    avatarColor: "purple",
  },
  {
    patientId: "PT-10205",
    initials: "JS",
    patient: "James Smith",
    time: "11:45 AM",
    type: "Cardiology",
    status: "Completed",
    avatarColor: "red",
  },
  {
    patientId: "PT-10210",
    initials: "AM",
    patient: "Ava Miller",
    time: "12:30 PM",
    type: "Gynecology",
    status: "Confirmed",
    avatarColor: "blue",
  },
  {
    patientId: "PT-10217",
    initials: "BJ",
    patient: "Benjamin Jones",
    time: "01:15 PM",
    type: "Diabetes Review",
    status: "Waiting",
    avatarColor: "red",
  },
  {
    patientId: "PT-10222",
    initials: "EV",
    patient: "Evelyn Thomas",
    time: "02:00 PM",
    type: "Cardiology",
    status: "Confirmed",
    avatarColor: "red",
  },
  {
    patientId: "PT-10231",
    initials: "DH",
    patient: "David Hill",
    time: "02:45 PM",
    type: "Consultation",
    status: "Scheduled",
    avatarColor: "green",
  },
  {
    patientId: "PT-10241",
    initials: "DM",
    patient: "Daniel Miller",
    time: "03:30 PM",
    type: "Physiotherapy",
    status: "Confirmed",
    avatarColor: "green",
  },
  {
    patientId: "PT-10250",
    initials: "RM",
    patient: "Rachel Morgan",
    time: "04:15 PM",
    type: "Follow-up",
    status: "Scheduled",
    avatarColor: "green",
  },
];

export const clinicalAlerts: ClinicalAlert[] = [
  {
    initials: "JS",
    patient: "James Smith",
    msg: "Blood pressure reading requires immediate review.",
    time: "10 minutes ago",
    color: "red",
  },
  {
    initials: "SA",
    patient: "Samuel Adams",
    msg: "Blood pressure significantly elevated.",
    time: "25 minutes ago",
    color: "red",
  },
  {
    initials: "EV",
    patient: "Evelyn Thomas",
    msg: "Oxygen saturation below normal range.",
    time: "45 minutes ago",
    color: "red",
  },
  {
    initials: "JM",
    patient: "Jonathan Mitchell",
    msg: "Follow-up appointment due soon.",
    time: "1 hour ago",
    color: "yellow",
  },
  {
    initials: "BJ",
    patient: "Benjamin Jones",
    msg: "Blood glucose levels require review.",
    time: "2 hours ago",
    color: "red",
  },
  {
    initials: "AW",
    patient: "Alexander Walker",
    msg: "Respiratory symptoms require monitoring.",
    time: "2 hours ago",
    color: "yellow",
  },
  {
    initials: "MT",
    patient: "Maria Thomas",
    msg: "Follow-up appointment overdue.",
    time: "3 hours ago",
    color: "yellow",
  },
  {
    initials: "RL",
    patient: "Robert Lee",
    msg: "Lab results ready for review.",
    time: "4 hours ago",
    color: "green",
  },
  {
    initials: "MW",
    patient: "Matthew Wright",
    msg: "Diabetes review required.",
    time: "5 hours ago",
    color: "yellow",
  },
  {
    initials: "JA",
    patient: "Jacob Thompson",
    msg: "Oxygen saturation requires review.",
    time: "6 hours ago",
    color: "red",
  },
];