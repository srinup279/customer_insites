import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import LogImg from '../../assets/images/logo-header.png'


function Login() {
    return (
        <div className='login_page'>
            <div className='left_side_img'>
                <div>
                    <img src={LogImg} alt='loading' />
                </div>
            </div>
            <div className='right_side_form'>
                <div className='form_div'>
                    <h5>Pilog Application Login</h5>
                    <form>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Username</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Username" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" />
                        </div>
                        <div className='all_options'>
                            <p><Link to="#" className='text-decoration-none'>Feedback</Link></p>
                            <p><Link to="#" className='text-decoration-none'>Forgot Password?</Link></p>
                        </div>
                        <div className='sign_up'>
                            <p className='text-center'>Don't have an account <Link to="#">Sign Up</Link></p>
                        </div>
                        <button className='sign_btn'>Sign in</button>
                    </form>

                    <div className='icons'>
                        <ul className='d-flex list-inline justify-content-center'>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                            <li><i className="bi bi-twitter"></i></li>
                            <li><i className="bi bi-youtube"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login