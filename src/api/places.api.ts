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
  limit: number = 5
): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `${API_URL}?namePrefix=${query}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY || "",
          "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST || "",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
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
