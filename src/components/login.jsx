import React , {useState , useContext} from 'react'
import ContextProvider from '../context/themStore'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const {setUser} = useContext(ContextProvider)

    const handlesubmit = (event) => {
        event.preventDefault()
        setUser({username, password})
        // setpassword('')
        // setusername('')
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text"
        className='bg-yellow-50'
        value={username}
        onChange={(e)=>setusername(e.target.value)} />
        <input type="text"
        value={password}
        className='bg-red-600'
        onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handlesubmit}>Subbmit</button>
    </div>
  )
}

export default Login