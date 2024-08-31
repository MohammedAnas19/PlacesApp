import { useState } from "react";
import "./App.css";
import SearchBox from "./components/searchbox";

function App() {
  const [query, setQuery] = useState("");
  const handleSearch = () => {};
  return (
    <div>
      <SearchBox
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;
