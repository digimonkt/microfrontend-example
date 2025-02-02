import React from "react";
import { Link } from "react-router-dom";

function HeaderContent({ loadingFrom }) {
  return (
    <header
      style={{
        backgroundColor: "#282c34",
        padding: "20px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Microfrontend Example</h1>
      <h3>Loading From: {loadingFrom}</h3>
      <nav>
        <Link
          to="/"
          style={{
            color: "#61dafb",
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/products"
          style={{
            color: "#61dafb",
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Products
        </Link>
        <Link to="/cart" style={{ color: "#61dafb", textDecoration: "none" }}>
          Cart ({0})
        </Link>
      </nav>
    </header>
  );
}

function Header({ ...rest }) {
  return <HeaderContent {...rest} />;
}

export default Header;
