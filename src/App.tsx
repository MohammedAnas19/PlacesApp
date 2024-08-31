import { useEffect, useState, useCallback } from "react";
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

  const searchPlaces = useCallback(async (query: string, limit: number, currentPage: number) => {
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
  }, []);

  useEffect(() => {
    searchPlaces(query, limit, currentPage);
  }, [ limit, currentPage, searchPlaces]);

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
