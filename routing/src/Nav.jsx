import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <div className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="Links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/newpost'>Post</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
