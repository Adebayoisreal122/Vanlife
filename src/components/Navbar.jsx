import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


  const navLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Vans",
      path: "/vans"
    },
  ]
  return (
    <>
    <nav className="navbar bg-body-secondary">
  <div className="container-fluid">
    <Link to={"/"} className="navbar-brand"><h2>#VANLIFE</h2></Link>
    <div className="d-flex gap-5" role="search">
    <div className="d-flex gap-5" >
    {
                navLinks.map((data, i) => {
                    return (
                        <div key={i}>
                            <NavLink  className={({isActive}) => (isActive? "text-info fw-bolder underline":"text-dark text-decoration-none")}  to={data.path}>{data.name}</NavLink>
                        </div>
                    );
                })
            }
                </div>
    </div>
  </div>
</nav>  
    </>
  )
}

export default Navbar