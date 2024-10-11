import React , {useState ,useContext} from 'react'
import themecontext from '../context/themeContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const {setUser} = useContext(themecontext)

    const handlesubmit = () => {
        setUser(username)

        setpassword('')
        setusername('')
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text"
        value={username}
        onChange={(e)=>setusername(e.target.value)} />
        <input type="text"
        value={password}
        onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handlesubmit}></button>
    </div>
  )
}

export default Login