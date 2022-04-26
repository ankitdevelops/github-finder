import React, { Fragment } from 'react'
import UserSearch from '../users/UserSearch'
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