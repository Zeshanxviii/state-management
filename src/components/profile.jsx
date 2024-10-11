import React, {useState} from 'react'
import themecontext from '../context/themeContext'

function profile() {
    const {user} = useContext(themecontext)
    if(!user) return <h1>please login</h1>

  return (
    <div>

        <h1>welcome {user.username}</h1>
    </div>
  )
}

export default profile