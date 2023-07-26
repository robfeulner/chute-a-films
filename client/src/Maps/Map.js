import { GoogleMap, Marker } from "@react-google-maps/api";
import "./map.css";

const Map = ({ location, zoomLevel }) => {
  return (
    <>
      <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
          <GoogleMap
            mapContainerStyle={{ height: "75%", width: "100%" }}
            center={location}
            zoom={zoomLevel}
            apiKey={process.env.GOOGLE__API_KEY}
          >
            <Marker position={location} />
          </GoogleMap>
        </div>
      </div>
    </>
  );
};

export default Map;
