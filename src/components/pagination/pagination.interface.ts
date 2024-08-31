export interface PaginationPropsType {
    currentPage: number;
    totalCount: number;
    limit: number;
    onLimitChange: (page: number) => void;
    onPageChange: (page: number) => void;
  }