import { useState } from "react";
import SearchBox from "./components/searchbox";
import PlacesTable from "./components/placestable";
import "./App.css";
import Layout from "./layout";
import Pagination from "./components/pagination";

function App() {
  const [query, setQuery] = useState("");
  const handleSearch = () => {};
  return (
    <Layout>
      <SearchBox
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <PlacesTable
        places={[
          {
            id: 3350606,
            wikiDataId: "Q24668",
            type: "CITY",
            city: "Aixirivall",
            name: "Aixirivall",
            country: "Andorra",
            countryCode: "AD",
            region: "Sant Julià de Lòria",
            regionCode: "06",
            latitude: 42.46245,
            longitude: 1.50209,
            population: 0,
          },
          {
            id: 3216144,
            wikiDataId: "Q24656",
            type: "CITY",
            city: "Aixovall",
            name: "Aixovall",
            country: "Andorra",
            countryCode: "AD",
            region: "Sant Julià de Lòria",
            regionCode: "06",
            latitude: 42.47635833,
            longitude: 1.48949167,
            population: 0,
          },
          {
            id: 3406038,
            wikiDataId: "Q4699394",
            type: "CITY",
            city: "Aixàs",
            name: "Aixàs",
            country: "Andorra",
            countryCode: "AD",
            region: "Sant Julià de Lòria",
            regionCode: "06",
            latitude: 42.48638889,
            longitude: 1.46722222,
            population: 0,
          },
        ]}
      />
      <Pagination currentPage={1} onPageChange={() => {}} totalPages={2} />
    </Layout>
  );
}

export default App;
