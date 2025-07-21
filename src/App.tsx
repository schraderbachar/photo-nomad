import { ConfigProvider, Divider, Flex, Space, ThemeConfig } from "antd"
import "./App.css"
import LocationListingComponent from "./components/listing/listing-component"
import PhotoPicker from "./components/photo-picker/photo-picker"

import GPSProvider from "./context/gps-provider"
import HeaderComponent from "./components/header/header-component"

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#191D32", // Oxford Blue
    colorTextBase: "#ffffff", // White text
    colorBgBase: "#191D32", // Use as background
  },
  components: {
    Button: {
      colorPrimary: "#FFE97B", // Jasmine for buttons
      colorTextLightSolid: "#191D32", // Dark text on light buttons
    },
    Table: {
      headerBg: "#E2C2C6",
      headerColor: "#191D32",
      borderColor: "#191D32",
    },
  },
}

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <div style={{ backgroundColor: "#191d32ff" }}>
        <Flex gap="middle" vertical>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <HeaderComponent />
            <GPSProvider>
              <div>
                <PhotoPicker />
              </div>
              <Divider />
              <Flex vertical>
                <div>
                  <LocationListingComponent />
                </div>
              </Flex>
            </GPSProvider>
          </Space>
        </Flex>
      </div>
    </ConfigProvider>
  )
}

export default App
