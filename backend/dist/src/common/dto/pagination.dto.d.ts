export declare class PaginationQueryDto {
    page: number;
    limit: number;
    q?: string;
}
export declare class PaginationMeta {
    total: number;
    page: number;
    limit: number;
}
export declare class Paginated<T> {
    data: T[];
    meta: PaginationMeta;
}
export declare function paginate<T>(data: T[], total: number, page: number, limit: number): Paginated<T>;
