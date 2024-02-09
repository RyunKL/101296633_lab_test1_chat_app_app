import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'

function Signup() {
    const [username, setUsername] = useState()
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {firstname, lastname, email, username, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return (
        <div className='main-bg'>
            <div className='container'>
                <div className='header'>
                    <h2>Register</h2>
                    <div className='underline'></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <input
                            type='text' 
                            name='firstname' 
                            placeholder='First Name'
                            onChange={(e) => setFirstname(e.target.value)}/>
                    </div>
                    <div className='inputs'>
                        <input
                            type='text' 
                            name='lastname' 
                            placeholder='Last Name'
                            onChange={(e) => setLastname(e.target.value)}/>
                    </div>
                    <div className='inputs'>
                        <input
                            type='email' 
                            name='email' 
                            placeholder='Email Address'
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='inputs'>
                        <input 
                            type='text' 
                            name='username' 
                            placeholder='User Name'
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className='inputs'>
                        <input
                            type='password' 
                            name='password' 
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="submit-container">
                        <button type='submit' className='register-btn'>Register</button>
                        <p>Already have an account?</p>
                        <Link to='/login' className='login-btn'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup