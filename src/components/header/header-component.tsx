import { Divider, Layout, Menu } from "antd"
import React from "react"

function HeaderComponent() {
  return (
    <>
      <div className="primary-bg">
        <h1 className="text-center fw-bold p-2">Photo Nomad</h1>
        <div className="flex px-5">
          <Divider />
        </div>
      </div>
    </>
  )
}

export default HeaderComponent
