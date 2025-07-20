import React, { useState } from "react"
import "./App.css"
import LocationListingComponent from "./components/listing/listing-component"
import PhotoPicker from "./components/photo-picker/photo-picker"

import GPSProvider from "./context/gps-provider"

function App() {
  //TODO
  //* choose color theme as well
  //* find out how to get country name from exif gps data

  // photo picker needs to send its data to location listing component

  return (
    <>
      <GPSProvider>
        <div>
          <LocationListingComponent />
        </div>

        <div>
          <PhotoPicker />
        </div>
      </GPSProvider>
    </>
  )
}

export default App
