import { usePagination } from "../../hooks/usePagination";
import { PaginationPropsType } from "./pagination.interface";
import "./pagination.styles.css";

const Pagination: React.FC<PaginationPropsType> = ({
  currentPage,
  totalCount,
  limit,
  onPageChange,
  onLimitChange,
}) => {
  const pagination=usePagination({totalCount,	pageSize:limit,	siblingCount :10,	currentPage:1})

  return (
    <div className="pagination">
      <div>
        {pagination?.map((page) => (
          <button
            key={`pageNumberId${page}`}
            onClick={() => onPageChange(parseInt(page+''))}
            style={{
              backgroundColor: page === currentPage ? "#7952b3" : "#fff",
              color: page === currentPage ? "#fff" : "#000",
            }}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
      <input
        type="number"
        value={limit}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onLimitChange(parseInt(e.target.value))}
        min="1"
        max={pagination?.length}
      />
      </div>
    </div>
  );
};

export default Pagination;
