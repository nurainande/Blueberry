import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../../Context/ContextProvider';

// const user = 'null';
const navItems = ["Daily Deal",'Flash Sale','New', 'Product','Support'];
const Navbar = ({setShowCart}) => {
  const { user,setUser,state} = useAppContext();
  
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">
          <Link to="/">BlueBerry</Link>
        </div>

        
        
        <ul className="nav-items">
          {
            navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a>{item}</a>
              </li>
            ))
          }
        </ul>

        <div className="last">
          <a>
            <i className="fas fa-search"></i>
          </a>
          <a
            onClick={() => setShowCart(true)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <div
              style={{
                background: "green",
                width: "15px",
                height: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                position: "absolute",
                right: "0",
                top: "-20%",
              }}
            >
              <span style={{ fontSize: "0.7rem" }}>{state.cart.length}</span>
            </div>
            <i className="fas fa-shopping-cart"></i>
          </a>
          {user ? (
            <a onClick={() => setUser(null)} style={{ cursor: "pointer" }}>
              Logout
            </a>
          ) : (
            <Link to="login-reg">
              <i className="fas fa-user-circle"></i>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar


// {
//   /* <ul className="nav-items">
//           <li className="nav-item">
//             <a>Daily Deal</a>
//           </li>
//           <li className="nav-item">
//             <a>Flash Sale</a>
//           </li>
//           <li className="nav-item">
//             <a>New</a>
//           </li>
//           <li className="nav-item">
//             <a>Product</a>
//           </li>
//           <li className="nav-item">
//             <a>Support</a>
//           </li>
//         </ul> */
// }