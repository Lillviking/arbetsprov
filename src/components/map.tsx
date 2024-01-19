import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
    const handleMapClick = (e: any) => {
        const { lat, lng } = e.latlng;
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
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
