import React, { Fragment } from 'react'
import UserSearch from '../users/UserSearch'
import UserItem from '../users/UserItem'
import UserResults from '../users/UserResults'


const Home = () => {
  return (
    <Fragment>
        <UserSearch/>
        <UserResults/>
    </Fragment>
  )
}

export default Home