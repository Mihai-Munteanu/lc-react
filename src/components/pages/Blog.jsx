import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
     return (
          <div className="container">
               <ul>
                    <li>
                         {/* <a href="#">Post One</a> */}
                         <Link to="/blog/1">Post One</Link>
                    </li>
                    <li>
                         {/* <a href="#">Post Two</a> */}
                         <Link to="/blog/2">Post Two</Link>

                    </li>
               </ul>
          </div>
     )
}
