export interface PaginationPropsType {
    currentPage: number;
    totalCount: number;
    limit: number;
    onPageChange: (page: number) => void;
  }