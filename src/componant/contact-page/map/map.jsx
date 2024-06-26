import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      className="componant-padding"
      style={{ height: "75vh", width: "100%" }}
    >
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AlzaSyCuTilAfnGfkZtix0t3qf-eOmWZ-N2LpoY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={40.72371} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
