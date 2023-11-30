import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import Leaflet from "leaflet";
import { useEffect, useState } from "react";
import useCities from "../hooks/useCities";
import Spinner from "./Spinner";
import useUrlPosition from "../hooks/useUrlPosition";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { useNavigate } from "react-router-dom";
import { useGeolocation } from "../hooks/useGeolocation";

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
  const corner1 = Leaflet.latLng(-90, -190);
  const corner2 = Leaflet.latLng(90, 190);
  const bounds = Leaflet.latLngBounds(corner1, corner2);

  const { data: cities, isLoading } = useCities();
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([
    51.505, -0.09,
  ]);
  const [lat, lng] = useUrlPosition();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation(null);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  if (isLoading)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="h-full bg-gray-600 relative flex-1 z-10">
      {!geolocationPosition && (
        <button
          onClick={getPosition}
          className="absolute left-1/2 bottom-5 z-[1000] -translate-x-1/2 px-4 py-2 uppercase bg-green-400 rounded-md"
        >
          {isLoadingPosition ? "Loading..." : "Get current position"}
        </button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        minZoom={2}
        maxBounds={bounds}
        maxBoundsViscosity={1}
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
            <Popup>
              <span>{city.emoji}</span> {city.cityName}
            </Popup>
          </Marker>
        ))}
        <ChangCenter position={mapPosition} />
        <Resize />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function Resize() {
  const map = useMap();
  setTimeout(() => {
    map.invalidateSize();
  }, 50);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e: LeafletMouseEvent) =>
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });

  return null;
}

function ChangCenter({ position }: { position: LatLngExpression }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
