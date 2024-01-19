import React, { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface IReverseGeocoding {
    position: {
        lat: number;
        lng: number;
    };
}

const ReverseGeocoding:  React.FC<IReverseGeocoding> = ({ position }) => {
  const [city, setCity] = useState('');
  const map = useMap();

  useEffect(() => {
    const fetchCity = async () => {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lng}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setCity(data.address.city || data.address.town || 'Unknown location');
      } catch (error) {
        console.error('Error fetching reverse geocode data:', error);
        setCity('Error retrieving location');
      }
    };

    fetchCity();
  }, [position, map]);

  return (
    <div>
      <p>Nearest city: {city}</p>
    </div>
  );
};

export default ReverseGeocoding;