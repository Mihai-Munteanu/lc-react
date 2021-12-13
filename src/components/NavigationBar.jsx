import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
     return (
          <nav>
               <ul>
                    <li>
                         {/* <a href="/">Home</a> */}
                         <NavLink to ="/" activeClassName="active" exact>Home</NavLink>
                    </li>
                    <li>
                         {/* <a href="/about">About</a> */}
                         <NavLink to ="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                         {/* <a href="/contact">Contact</a> */}
                         <NavLink to ="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                    <li>
                         <NavLink to ="/blog" activeClassName="active">Blog</NavLink>
                    </li>
               </ul>
          </nav>
     )
}
