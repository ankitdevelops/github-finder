import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaBlog, FaTwitter, FaGithub } from "react-icons/fa";
import GithubContext from "../../context/GithubContext";
import Repos from "./Repos";
import Spinner from "../layout/Spinner";
const User = () => {
  const { user, getUser, getRepos, repos } = useContext(GithubContext);

  const params = useParams();
  // console.log(repos);
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (user.length === 0 || repos.length === 0) {
    return  <div className="text-center">
    < Spinner/>
  </div>
  }else{

  }


  return (
    <div className="row my-5">
      <div className="col-md-4">
        <div className="card card-body">
          <div className="profile-img  text-center">
            <img
              src={user.avatar_url}
              className="rounded-circle text-center"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="username text-center">
            <h6 className="my-2">{user.name}</h6>
          </div>
          <div className="user-bio">
            <p className="text-muted">{user.bio}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3 px-4">
            <div className="stats text-center">
              <h6 className="mb-0 ">Followers</h6>{" "}
              <span className="text-center">{user.followers}</span>
            </div>
            <div className="stats text-center">
              <h6 className="mb-0">Following</h6> <span>{user.following}</span>
            </div>
            <div className="stats text-center">
              <h6 className="mb-0">Public Repos</h6>{" "}
              <span>{user.public_repos}</span>
            </div>
          </div>
          <div className="user-info">
            <ul className="list-group list-group-flush">
              {user.blog ? (
                <li className="list-group-item d-flex justify-content-start align-items-center ">
                  <FaBlog />
                  <a
                    href={user.blog}
                    className=" mx-2 text-decoration-none text-capitalize "
                  >
                    Blog
                  </a>
                </li>
              ) : (
                ""
              )}

              {user.twitter_username ? (
                <li className="list-group-item d-flex justify-content-start align-items-center ">
                  <FaTwitter className="" />
                  <a
                    href={`twitter.com/${user.twitter_username}`}
                    className=" mx-2 text-decoration-none text-capitalize"
                  >
                    {user.twitter_username}
                  </a>
                </li>
              ) : (
                ""
              )}
              {user.html_url ? (
                <li className="list-group-item d-flex justify-content-start align-items-center ">
                  <FaGithub className="" />
                  <a
                    href={user.html_url}
                    className=" mx-2 text-decoration-none text-capitalize"
                  >
                    View On Github
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-8 ">
        <div className="list-group">
        <Repos  repos = {repos} />
        </div>
       
      </div>
    </div>
  );
};

export default User;
