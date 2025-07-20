import { useContext } from "react"
import { GPSContextType } from "../components/abstractions/gps-context-types"
import GPSContext from "./gps-context"

export const useGPS = (): GPSContextType => {
  const context = useContext(GPSContext)

  if (!context) {
    throw new Error("useGPS must be used within a GPSProvider")
  }

  return context
}
