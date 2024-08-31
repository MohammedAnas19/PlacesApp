import { PlaceType } from "../components/placestable/placestable.interface";

const API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

interface Link {
  rel: string;
  href: string;
}

interface Metadata {
  currentOffset: number;
  totalCount: number;
}

interface ApiResponse {
  data: PlaceType[];
  links: Link[];
  metadata: Metadata;
}

export const fetchCities = async (
  query: string,
  limit: number = 3,
  currentPage: number = 1
): Promise<ApiResponse> => {
  try {
    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
    const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;
    const response = await fetch(
      `${API_URL}?offset=${
        limit * currentPage
      }&namePrefix=${query}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": apiHost,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    console.log("DATA", data);
    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return {
      data: [],
      metadata: { currentOffset: 0, totalCount: 0 },
      links: [],
    };
  }
};

var mockRes: ApiResponse = {
  data: [
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
      regionWdId: "Q24282",
      latitude: 42.46245,
      longitude: 1.50209,
      population: 1025,
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
      regionWdId: "Q24282",
      latitude: 42.47635833,
      longitude: 1.48949167,
      population: 69,
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
      regionWdId: "Q24282",
      latitude: 42.48638889,
      longitude: 1.46722222,
      population: 0,
    },
  ],
  links: [
    { rel: "first", href: "/v1/geo/cities?offset=0&limit=3&namePrefix=" },
    { rel: "next", href: "/v1/geo/cities?offset=3&limit=3&namePrefix=" },
    { rel: "last", href: "/v1/geo/cities?offset=647163&limit=3&namePrefix=" },
  ],
  metadata: { currentOffset: 0, totalCount: 647166 },
};
