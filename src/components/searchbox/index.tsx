import { SearchBoxProps } from "./searchbox.interface";
import "./searchbox.styles.css";

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange, onSearch, disabled=false }: any) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={value}
        // onChange={onChange}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
        placeholder="Search places..."
        disabled={disabled}
      />
      <div>
        <p>Ctrl + /</p>
      </div>
    </div>
  );
};

export default SearchBox;
