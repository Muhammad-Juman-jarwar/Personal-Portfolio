import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[25.4627, 68.7194]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[25.4627, 68.7194]}>
        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Muhammad Juman</h3>
        <span>Jarwar</span>
        <br />
        <span>Location : Tando Allahyar Sindh Pakistan</span>
        <br />
        <span>Email: muhammad1juman@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
