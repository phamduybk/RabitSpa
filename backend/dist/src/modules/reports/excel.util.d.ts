export declare const MONEY_FMT = "#,##0 [$\u20AB-42A]";
export declare const DATE_FMT = "dd/mm/yyyy hh:mm";
export interface ExcelColumn {
    header: string;
    key: string;
    width?: number;
    money?: boolean;
    date?: boolean;
    noTotal?: boolean;
}
export interface ExcelSheet {
    sheetName: string;
    columns: ExcelColumn[];
    rows: Record<string, unknown>[];
    totalRow?: Record<string, unknown>;
    title?: string;
}
export interface BuildWorkbookOptions {
    sheetName: string;
    title: string;
    columns: ExcelColumn[];
    rows: Record<string, unknown>[];
    totalRow?: Record<string, unknown>;
    meta?: string[];
    extraSheets?: ExcelSheet[];
    kpis?: {
        label: string;
        value: string | number;
    }[];
}
export declare function buildReportWorkbook(opts: BuildWorkbookOptions): Promise<Buffer>;
