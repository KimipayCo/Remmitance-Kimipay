import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = () => {

    const customIcon = new L.DivIcon({
        className: 'bi bi-geo-alt-fill fs-3',
        iconSize: [30, 46],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });
    const position = [-1.2817274883402474, 36.81792354893206];

    return (
        <MapContainer center={position} zoom={13} style={{ height: '175px', width: '100%' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
            <Popup>
            Rattansi House, <br /> Koinange Street.
            </Popup>
        </Marker>
        </MapContainer>
    );
};

export default MapComponent;
