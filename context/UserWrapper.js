import React from 'react'
import UserState from './UserState'

const UserWrapper = ({children}) => {
  return (
    <div>
      <UserState>
        {children}
      </UserState>
    </div>
  )
}

export default UserWrapper
