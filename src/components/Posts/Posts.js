import React from 'react';
import Post from './Post';
import './Posts.scss';

const Posts = () => {
  return (
    <section className="posts">
      <header className="posts__header">
        <div className="posts__header__links">
          <p className="posts__header__link active">Latest</p>
          <p className="posts__header__link">Popular</p>
        </div>
        <label htmlFor="filter-post" className="posts__header__input">
          <span className="posts__header__input-label">Show:</span>
          <select id="filter-post" className="posts__header__input-select">
            <option value="all">All</option>
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </label>
      </header>
      <Post />
    </section>
  );
};

export default Posts;
