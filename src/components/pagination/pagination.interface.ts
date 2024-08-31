export interface PaginationPropsType {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }