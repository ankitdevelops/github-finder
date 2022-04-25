import React,{useContext} from 'react'
import GitHubContext from "../../context/GithubContext"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"

const UserResults = () => {

  const {users,loading} = useContext(GitHubContext)

  if (!loading){
    return(
     <div className="row mx-auto mt-5 mb-5" >
         {
            users.map((user) => (
              <UserItem key = {user.id} user = {user}/>
            ))
         }
     </div>
    )
  }

  return (
    
      <div className="text-center">
        < Spinner/>
      </div>
    
  )
}

export default UserResults