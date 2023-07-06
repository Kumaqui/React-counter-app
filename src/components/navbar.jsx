import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{""}
//           <span className="badge badge-pill badge-secondary m-2">
//             { this.props.totalCounters }
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// sfc // Stateless Functional Component
const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{""}
        <span className="badge badge-pill badge-secondary m-2">
          { totalCounters }
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
