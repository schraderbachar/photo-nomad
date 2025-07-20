import React, { useState } from "react"
import {
  GPSContextType,
  GPSData,
} from "../components/abstractions/gps-context-types"
import GPSContext from "./gps-context"

const GPSProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataArray, setDataArray] = useState<GPSData[]>([])

  const addItem = (newItem: GPSData) => {
    setDataArray((prevArray) => [...prevArray, newItem])
  }

  const removeItem = (id: string) => {
    setDataArray((prevArray) => prevArray.filter((item) => item.id !== id))
  }

  const contextValue: GPSContextType = { dataArray, addItem, removeItem }

  return (
    <GPSContext.Provider value={contextValue}>{children}</GPSContext.Provider>
  )
}

export default GPSProvider
