import React from "react";
import { Menu } from "antd";
const { Item } = Menu;
import { useLocation, useHistory } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const history = useHistory();

  

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        className="shadow-md"
        onClick={onClick}
        selectedKeys={[currentLocation()]}
      >
        <Item key="home">Home</Item>
        <Item key="blacklist">Blacklist</Item>
        <Item key="update">Update</Item>
      </Menu>
      <main className="container px-6 py-4 mx-auto">{children}</main>
    </>
  );

  function currentLocation() {
    if (location.pathname === "/") {
      return "home";
    }

    return location.pathname.replace("/", "");
  }

  function onClick(e) {
      const {key} = e;
      if(key === "home") {
          history.push("/")
      }else {
          history.push(`/${key}`)
      }
  }
}

export default Layout;
