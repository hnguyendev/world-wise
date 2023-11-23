import { useState } from "react";

interface defaultPosition {
  lat: number;
  lng: number;
}

export function useGeolocation(defaultPosition: defaultPosition | null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState("");

  const getPosition = () => {
    if (!navigator.geolocation)
      return setError("Broser not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );
  };

  return { isLoading, position, error, getPosition };
}
