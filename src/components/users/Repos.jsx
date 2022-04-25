import React from "react";

const Repos = ({repos}) => {
  return (
    <>
      {
          repos.map((repo) => (
            <a key = {repo.id} href={repo.html_url} className="list-group-item list-group-item-action">
            {repo.full_name}
          </a>
          ))
      }
    </>
  );
};

export default Repos;
