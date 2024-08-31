import { useEffect, useState } from "react";
import SearchBox from "./components/searchbox";
import PlacesTable from "./components/placestable";
import "./App.css";
import Layout from "./layout";
import Pagination from "./components/pagination";
import { fetchCities } from "./api/places.api";
import { PlaceType } from "./components/placestable/placestable.interface";

function App() {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState<Array<PlaceType>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(3);

  const searchPlaces = async (
    query: string,
    limit: number,
    currentPage: number
  ) => {
    setIsLoading(true);
    const data = await fetchCities(query, limit, currentPage);
    setPlaces(data?.data);
    setTotalCount(data.metadata.totalCount);
    setIsLoading(false);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    searchPlaces(query, limit, currentPage);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (limit: number) => {
    setLimit(limit);
  };

  useEffect(() => {
    searchPlaces(query, limit, currentPage);
  }, [limit,currentPage]);

  return (
    <Layout>
      <SearchBox
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <PlacesTable places={places} isLoading={isLoading} />
      {places.length > 0 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          limit={limit}
          onLimitChange={handleLimitChange}
          totalCount={totalCount}
        />
      )}
    </Layout>
  );
}

export default App;
