import { PlacesTablePropsType } from "./placestable.interface";
import "./placestable.styles.css";

const PlacesTable: React.FC<PlacesTablePropsType> = ({
  places,
  isLoading = false,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!places.length) {
    return <div>No result found</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {places.map((place: any, index: any) => (
          <tr key={place.id}>
            <td>{index + 1}</td>
            <td>{place.name}</td>
            <td>
              <img
                src={`https://flagsapi.com/${place.countryCode}/flat/32.png`}
                alt={place.country}
              />{" "}
              {place.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlacesTable;
