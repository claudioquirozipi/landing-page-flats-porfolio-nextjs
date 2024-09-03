"use client";
import React, { useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.416775, // Coordenadas centrales (por ejemplo, Madrid)
  lng: -3.70379,
};

const apartments = [
  { id: 1, name: "Apartamento A", position: { lat: 40.416775, lng: -3.70379 } },
  { id: 2, name: "Apartamento B", position: { lat: 40.426775, lng: -3.71379 } },
  // Añade más apartamentos según sea necesario
];

function MyMap() {
  const [selected, setSelected] = React.useState<any>(null);

  const onMapClick = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onClick={onMapClick}
      >
        {apartments.map((apartment) => (
          <Marker
            key={apartment.id}
            position={apartment.position}
            onClick={() => setSelected(apartment)}
          />
        ))}

        {selected && (
          <InfoWindow
            position={selected.position}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>{selected.name}</h2>
              <p>Detalles del apartamento...</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyMap);
