import React from "react";
import { Link } from "gatsby";
import Logo from "../../static/sea.svg";
const styles = {
  container: {
    height: 50,
    backgroundColor: "#066b98",
    display: "flex",
    alignItems: "center",
    width: "inherit",
    // border: '1px solid red'
  },
  logo: {
    width: 30,
    padding: 20
  },
  brand: {
    color: "#eee",
    fontFamily: "Rajdhani, sans-serif",
    fontSize: "1.8em",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none"
  },
  links: {
    color: "#ccc",
    textDecoration: "none",
    fontFamily: "Quicksand, sans-serif",
    height: "100%",
    padding: 17,
    float: "right"
  },
  linksContainer: {
    width: "100%",
    // border: '1px solid blue'
  }
};
const Navbar = props => {
  const { pad, brand } = props;
  const links = [
    { id: 0, path: "/company", title: "Company" },
    { id: 1, path: "/blog", title: "Blog" },
    { id: 2, path: "/products", title: "Products" }
  ];

  return (
    <div
      style={Object.assign({}, styles.container, {
        paddingLeft: pad,
        paddingRight: pad
      })}
    >
      
      <div>
        <Link to="/">
          <img src={Logo} style={styles.logo} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/" style={styles.brand}>
          {brand}
        </Link>
      </div>
      <div style={styles.linksContainer}>
        {links.map(link => (
          <Link 
            to={link.path} 
            key={link.id} 
            style={styles.links}
            onMouseOver={e => (e.target.style.color = "#ffd454")}
            onMouseOut={e => (e.target.style.color = "#ccc")}
            onFocus={(e)=> (e.target.style.fontWeight = "bolder")}
            onClick={(e)=> (e.target.style.fontWeight = "bolder")}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
