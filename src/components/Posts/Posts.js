import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/Post/postActions';
import { postSelector } from '../../redux/Post/postSelector';
import Post from './Post';
import './Posts.scss';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(postSelector);
  const [isPopular, setIsPopular] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  posts.sort((a, b) => {
    return b.publicationTime.slice(8, 10) - a.publicationTime.slice(8, 10);
  });

  const currentCategory = isPopular
    ? posts.filter((post) => post.isPopular === true)
    : posts.filter((post) => post.isPopular !== true);

  return (
    <section className="posts">
      <header className="posts__header">
        <div className="posts__header__links">
          <button
            type="button"
            className={`posts__header__links-btn ${!isPopular && 'active'}`}
            onClick={() => setIsPopular(!isPopular)}
          >
            Latest
          </button>
          <button
            type="button"
            className={`posts__header__links-btn ${isPopular && 'active'}`}
            onClick={() => setIsPopular(!isPopular)}
          >
            Popular
          </button>
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
      {currentCategory.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
