import React, { useReducer } from "react";
import { Link } from "gatsby";

const styles = {
  container: {
    height: 50,
    backgroundColor: "#222",
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    zIndex: 2,
    // border: '1px solid red',
    // paddingRight: '200px'
  },
  logo: {
    width: 30,
    paddingRight: 20,
    paddingLeft: 10
  },
  brand: {
    color: "#eee",
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
    fontWeight: "700i",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none",
    width: "100%",
    // border: '1px solid red'
  },
  links: {
    color: "#ccc",
    textDecoration: "none",
    fontFamily: "Quicksand, sans-serif",
    paddingLeft: '17px',
    fontSize: '16px'
  },
  linksContainer: {
    // border: "1px solid blue",
    display: 'flex',
  }
};

const initialState = { products: false, blog: false, company: false };
const Navbar = props => {
  const { logo, pad, brand } = props;

  function reducer(state, action) {
    switch (action) {
      case "products":
        return { company: false, blog: false, products: true };
      case "blog":
        return { company: false, blog: true, products: false };
      case "company":
        return { company: true, blog: false, products: false };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const links = [
    {
      id: 2,
      path: "/products",
      title: "Products",
      active: state.products,
      onClick: () => dispatch("products")
    },
    {
      id: 1,
      path: "/blog",
      title: "Blog",
      active: state.blog,
      onClick: () => dispatch("blogs")
    },
    {
      id: 0,
      path: "/company",
      title: "Company",
      active: state.company,
      onClick: () => dispatch("company")
    },
    
    
  ];

  // console.log(width);
  return (
    <div
      style={Object.assign({}, styles.container, {
        paddingLeft: pad,
        paddingRight: pad
      })}
    >
      <div>
        <Link to="/">
          <img src={logo} style={styles.logo} alt="" />
        </Link>
      </div>
      <div style={{ width: 'inherit', display: 'flex' }}>
        <Link to="/" style={styles.brand}>
          {brand}
        </Link>
      </div>
      <div
        style={Object.assign({}, styles.linksContainer, { paddingRight: pad + pad + 10})}
      >
        {links.map(link => (
          <Link
            to={link.path}
            key={link.id}
            style={Object.assign({}, styles.links, {
              color: link.active === true ? "#ffd454" : "#ccc",
            })}
            onMouseEnter={e => {
              e.target.style.color = "#ffd454";
            }}
            onMouseLeave={e => (e.target.style.color = "#ccc")}
            onClick={link.onClick}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
