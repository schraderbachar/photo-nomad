import React, { useEffect, useState } from "react"
import { Space, Table, TableProps, Tag } from "antd"
import GPSContext from "../../context/gps-context"
import { GPSContextType, GPSData } from "../abstractions/gps-context-types"
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

const data: GPSContextType[] = []
//need to populate this from the photo picker

function LocationListingComponent() {
  const { dataArray } = useGPS()

  return <Table<GPSData> columns={columns} dataSource={dataArray} />
}

export default LocationListingComponent
