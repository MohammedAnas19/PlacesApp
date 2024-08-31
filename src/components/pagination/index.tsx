import { usePagination } from "../../hooks/usePagination";
import { PaginationPropsType } from "./pagination.interface";
import "./pagination.styles.css";

const Pagination: React.FC<PaginationPropsType> = ({
  currentPage,
  totalCount,
  limit,
  onPageChange,
}) => {
  const pagination = usePagination({
    totalCount,
    pageSize: limit,
    siblingCount: 1,
    currentPage: currentPage,
  });

  return (
    <div className="pagination">
      {pagination?.map((page) => (
       page==='...' ?<p>{page}</p>:<button
          key={`pageNumberId${page}`}
          onClick={() => onPageChange(parseInt(page + ""))}
          style={{
            backgroundColor: page === currentPage ? "#7952b3" : "#fff",
            color: page === currentPage ? "#fff" : "#000",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
