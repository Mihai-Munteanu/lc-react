import React from 'react'
import { useParams } from 'react-router'

export default function BlogPost() {

     const params = useParams(); 

     return (
          <div className="container">
               This is blog post {params.id}
          </div>
     )
}
