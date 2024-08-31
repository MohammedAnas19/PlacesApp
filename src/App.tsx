import { useEffect, useState, useCallback } from "react";
import SearchBox from "./components/searchbox";
import PlacesTable from "./components/placestable";
import "./App.css";
import Layout from "./components/layout";
import Pagination from "./components/pagination";
import { fetchCities } from "./api/places.api";
import { PlaceType } from "./components/placestable/placestable.interface";
import Divider from "./components/divider";

function App() {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState<Array<PlaceType>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(3);

  const searchPlaces = useCallback(
    async (query: string, limit: number, currentPage: number) => {
      setIsLoading(true);
      try {
        const data = await fetchCities(query, limit, currentPage);
        setPlaces(data?.data || []);
        setTotalCount(data?.metadata.totalCount || 0);
      } catch (error) {
        console.error("Failed to fetch cities", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    searchPlaces(query, limit, currentPage);
  }, [limit, currentPage, searchPlaces]);

  const handleSearch = useCallback(() => {
    setCurrentPage(1);
    searchPlaces(query, limit, 1);
  }, [query, limit, searchPlaces]);

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  const handleQueryChange = useCallback((q: string) => {
    setQuery(q);
  }, []);

  const handleLimitChange = useCallback((newLimit: number) => {
    setLimit(newLimit);
  }, []);

  return (
    <Layout>
      <SearchBox
        value={query}
        onSearch={handleSearch}
        onChange={handleQueryChange}
      />

      <Divider />

      <PlacesTable places={places} isLoading={isLoading} />

      <Divider />

      <div className="pagination-container">
        {places.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            limit={limit}
            totalCount={totalCount}
          />
        ) : (
          <div></div>
        )}
        <input
          type="number"
          value={limit}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleLimitChange(parseInt(e.target.value))
          }
          min="1"
          max={Math.ceil(totalCount / limit)}
        />
      </div>
    </Layout>
  );
}

export default App;
