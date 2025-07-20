export interface GPSData {
  id: string
  lat?: number
  lng?: number
  file?: File
  dateUploaded?: Date
  locationName?: string
  //could have city etc here later
}

export interface GPSContextType {
  dataArray: GPSData[]
  addItem: (newItem: GPSData) => void
  removeItem: (id: string) => void
}
