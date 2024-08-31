import { useEffect, useRef } from "react";
import { SearchBoxProps } from "./searchbox.interface";
import "./searchbox.styles.css";

const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  onSearch,
  disabled = false,
}: any) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="search-box">
      <input
        ref={searchRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
