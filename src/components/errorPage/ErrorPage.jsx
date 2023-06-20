import React from 'react'
import ErrorImg from '../../assets/images/error_page.png'
import './ErrorPage.css'
import { Link } from 'react-router-dom'


function ErrorPage() {
  return (
    <div className='error'>
      <div>
        <h1>Page Not Found</h1>
        <div className='text-center mt-5'>
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage