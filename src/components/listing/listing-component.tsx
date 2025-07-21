import { Table, TableProps } from "antd"
import { GPSData } from "../abstractions/gps-context-types"
import { useGPS } from "../../context/useGps"

const columns: TableProps<GPSData>["columns"] = [
  {
    title: "Date",
    dataIndex: "dateUploaded",
    key: "dateUPloaded",
  },
  {
    title: "Lattitue",
    dataIndex: "lat",
    key: "lat",
  },
  {
    title: "Longitude",
    dataIndex: "lng",
    key: "lng",
  },
  {
    title: "Country",
    dataIndex: "locationName",
    key: "locationName",
  },
]

function LocationListingComponent() {
  const { dataArray } = useGPS()

  return (
    <Table<GPSData> columns={columns} dataSource={dataArray} className="p-3" />
  )
}

export default LocationListingComponent
