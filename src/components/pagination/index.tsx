import { PaginationPropsType } from "./pagination.interface";
import "./pagination.styles.css";

const Pagination: React.FC<PaginationPropsType> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="pagination">
      <div>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
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
        <select name="" id="">
          {pages.map((page) => (
            <option>{page}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
