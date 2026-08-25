import { Card, CardHeader, CardTitle } from "./ui/card";

export function ClinicalAlerts(){
    return(
        <Card className="overflow-hidden rounded-xl border-slate-200 px-5 py-4.5">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-semibold text-slate-900">
                    Clinical Alerts
                </CardTitle>
            </CardHeader>
        </Card>
    );
}