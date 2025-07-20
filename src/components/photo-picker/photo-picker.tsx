import React, { useRef, useState } from "react"
import exifr from "exifr"
import { useGPS } from "../../context/useGps"
import { UploadOutlined } from "@ant-design/icons"
import { Button } from "antd"

function PhotoPicker() {
  const { addItem } = useGPS()
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoSelected = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true)
    const files = event.target.files
    if (!files) {
      return
    }

    for (const file of Array.from(files)) {
      const data = await exifr.gps(file)
      if (data && data.latitude && data.longitude) {
        addItem({
          id: crypto.randomUUID(),
          file: file,
          lat: data.latitude,
          lng: data.longitude,
          dateUploaded: new Date(Date.now()),
        })
      } else {
        console.warn("No GPS data in:", file.name)
        // eventually prompt manual input here
      }
    }

    setLoading(false)
  }

  const uploadPhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <>
      <h2>Upload picture to see where it was taken</h2>
      <h4>Keep it Classy</h4>
      <p>
        Hey there, adventurous uploader 👋 A quick heads-up before you bless us
        with your content: This isn’t that kind of app. So please, no nudes, no
        booze, no bongs. Basically: Keep your clothes on 🧥 Keep it legal 🚓
        Keep Grandma proud 👵
      </p>
      <input
        type="file"
        id="fileInput"
        ref={fileInputRef}
        className="file-input"
        onChange={handlePhotoSelected}
      />
      <Button onClick={uploadPhoto} icon={<UploadOutlined />} loading={loading}>
        Click to Upload
      </Button>
    </>
  )
}

export default PhotoPicker
