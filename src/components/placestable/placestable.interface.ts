export interface PlaceType {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionWdId: string;
  regionCode: string;
  latitude: number;
  longitude: number;
  population: number;
}

export interface PlacesTablePropsType {
  places: Array<PlaceType>;
  isLoading?: boolean;
  query?: string;
}
