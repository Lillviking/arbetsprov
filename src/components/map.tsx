import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { CoordinateDataContext } from "../context/CoordinateDataContext";
import { CoordinateDataType } from "../context/CoordinateDataContext";

export const Map = () => {
    const coordinateDataContext = useContext(CoordinateDataContext);

    const handleMapClick = async (e: any) => {
        const { lat, lng } = e.latlng;
        const coordinates: CoordinateDataType = {
            latitude: lat,
            longitude: lng,
        };

        // Utför omvänd geokodning här
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            const cityName = data.address.city || data.address.town || 'Unknown location';
            coordinates.name = cityName; // Lägg till namnet på staden till koordinaterna
        } catch (error) {
            console.error('Error fetching reverse geocode data:', error);
            coordinates.name = 'Error retrieving location'; // Hantera fel
        }

        coordinateDataContext?.setCoordinateData(coordinates);

    };

    const MapClickEvents = () => {
        useMapEvents({
            click: handleMapClick
        });

        return null;
    };

    return (
        <MapContainer
            style={{ height: "400px", width: "100%" }}
            center={[59.32703, 18.01547]}
            zoom={13}
            scrollWheelZoom
        >
            <MapClickEvents />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default Map;
