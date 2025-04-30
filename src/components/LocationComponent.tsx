import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import MapResizer from "./MapResizer";

function LocationComponent() {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error("Error getting location", err);
      }
    );
  }, []);

  return (
    <div className="w-[30%] h-[450px] flex flex-col px-4 py-5 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Your Location</h2>
      {!position ? (
        <p className="text-sm text-gray-500">Fetching location...</p>
      ) : (
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
        >
          <MapResizer />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} />
          <Marker position={[28.6139, 77.209]} /> {/* Destination */}
          <Polyline positions={[position, [28.6139, 77.209]]} color="blue" />
        </MapContainer>
      )}
    </div>
  );
}


export default LocationComponent;
