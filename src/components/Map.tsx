import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import useCities from "../hooks/useCities";
import Spinner from "./Spinner";

interface city {
  id: string;
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
}

const Map = () => {
  const [searchParams] = useSearchParams();
  const { data: cities, isLoading } = useCities();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const [mapPosition, setMapPosition] = useState(undefined);

  if (isLoading) return <Spinner />;

  return (
    <div className="h-full bg-gray-600 relative flex-1 z-10">
      {/* <MapContainer
        center={[51.505, -0.09]}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city: city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
