import React from "react";
import { Link } from "react-router-dom";
const UserItem = ({ user }) => {
  return (
    <div className="col-md-3  mb-5">
      <div className=" d-flex justify-content-center align-items-center">
        <div className="card card-body bg-dark">
          <div className="user text-center">
            <div className="profile">
              {" "}
              <img
                src={user.avatar_url}
                className="rounded-circle"
                alt={user.name}
                width={80}
              />{" "}
            </div>
          </div>
          <div className="mt-5 text-center text-white">
            <h6 className="mb-1">{user.login}</h6>
            <Link to={`/user/${user.login}`} className="btn btn-primary btn-sm follow">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
