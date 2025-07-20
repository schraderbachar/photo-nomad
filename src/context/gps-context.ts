import { createContext } from "react"
import { GPSContextType } from "../components/abstractions/gps-context-types"

const GPSContext = createContext<GPSContextType>({
  dataArray: [],
  addItem: () => {
    throw new Error("addItem not implemented")
  },
  removeItem: () => {
    throw new Error("removeItem not implemented")
  },
})

export default GPSContext
