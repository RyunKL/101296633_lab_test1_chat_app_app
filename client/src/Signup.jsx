import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
        <div className='clientBg'>
            <div className='txtfieldCard'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input 
                            type='text' 
                            name='firstname' 
                            placeholder='Enter your first name'
                            onChange={(e) => setFirstname(e.target.value)}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input 
                            type='text' 
                            name='lastname' 
                            placeholder='Enter your last name'
                            onChange={(e) => setLastname(e.target.value)}/>
                    </div>
                    <div>
                        <label>email</label>
                        <input 
                            type='email' 
                            name='email' 
                            placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Username</label>
                        <input 
                            type='text' 
                            name='username' 
                            placeholder='Enter your username'
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label>password</label>
                        <input 
                            type='password' 
                            name='password' 
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type='submit'>Register</button>
                </form>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Signup