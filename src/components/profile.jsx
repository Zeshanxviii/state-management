import React, {useContext} from 'react'
import ContextProvider from '../context/themStore'

function Profile() {
    const {user} = useContext(ContextProvider)
    if(!user) return <h1>please login</h1>

  return (
    <div>

        <h1>welcome {user.username}</h1>
    </div>
  )
}

export default Profile