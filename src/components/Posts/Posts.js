import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import chevronDown from '../../assets/icons/chevronDown.svg';
import funnel from '../../assets/icons/funnel.svg';
import useWindowSize from '../../hooks/useWindowSize';
import { fetchPosts } from '../../redux/Post/postActions';
import { postSelector } from '../../redux/Post/postSelector';
import Post from './Post';
import './Posts.scss';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(postSelector);
  const [isPopular, setIsPopular] = useState(false);
  const currentWidth = useWindowSize();

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
        {currentWidth > 768 ? (
          <div className="posts__header__filter">
            <span className="posts__header__filter-label">Show:</span>
            <span className="posts__header__filter-select">All</span>
            <img src={chevronDown} alt="chevron-down" />
          </div>
        ) : (
          <img src={funnel} alt="funnel" />
        )}
      </header>
      {currentCategory.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
