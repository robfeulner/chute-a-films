import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./map.css";
import { GiVhs } from "react-icons/gi";
import LocationPin from "./LocationPin";
import Iframe from "react-iframe";
import { styled } from "styled-components";

const Map = () => {
  const zoomLevel = 5;

  return (
    <>
      {/* <div className="map">
        <div className="google-map">
          <GoogleMap
            mapContainerStyle={{ height: "75%", width: "100%" }}
            center={location}
            zoom={zoomLevel}
            apiKey={process.env.GOOGLE__API_KEY}
          >
            <Marker
              position={{ lat: 45.53726279045334, lng: -73.57072585397076 }}
            />
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMap>
        </div>
      </div> */}
      <Wrapper>
        <H1>
          Chutes à films is located at 2210 Mont-Royal Ave E, Montreal, inside
          of Le Cinoche.
        </H1>
        <StyledIframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11178.72560650736!2d-73.5708546!3d45.5366165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91be86b4ae703%3A0x84cdfd85d24fcc14!2sCinoche%20Video!5e0!3m2!1sen!2sca!4v1690397548886!5m2!1sen!2sca&z=${zoomLevel}`}
          width="600"
          height="450"
          allowFullScreen=""
          border=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          zoomLevel="5"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 3.5em;
  text-align: center;
  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 1.5em;
  }
`;

const StyledIframe = styled(Iframe)`
  width: 100%;
  height: 60vh;
  margin: 3%;
  border: 0;

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 400px;
  }
`;

export default Map;
