import { sanitize } from 'dompurify';
import parse from 'html-react-parser';
import { object } from 'prop-types';
import React, { useState } from 'react';
import bookmark from '../../../assets/icons/bookmark.svg';
import bookmarkFill from '../../../assets/icons/bookmarkFill.svg';
import bookmarkHover from '../../../assets/icons/bookmarkHover.svg';
import caretRight from '../../../assets/icons/caretRight.svg';
import clock from '../../../assets/icons/clock.svg';
import heart from '../../../assets/icons/heart.svg';
import heartFill from '../../../assets/icons/heartFill.svg';
import heartHover from '../../../assets/icons/heartHover.svg';
import searchDoc from '../../../assets/icons/searchDoc.svg';
import threeDots from '../../../assets/icons/threeDots.svg';
import { formatPostDate } from '../../../helpers';
import useWindowSize from '../../../hooks/useWindowSize';
import './Post.scss';
import PostModal from './PostModal';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const currentWith = useWindowSize();

  const cleanHTML = sanitize(post.content, {
    USE_PROFILES: { html: true },
  });

  return (
    <article className="article">
      <header className="article__header">
        <div className="article__header__feeds">
          <div className="article__header__feeds-wrap">
            <img
              className="article__header__feeds-icon"
              src={searchDoc}
              alt="feeds"
            />
            <p className="article__header__feeds-feed">{post.feed}</p>
          </div>
          <img
            className="article__header__feeds-icon mobile-none"
            src={caretRight}
            alt="caret-right"
          />
          <div>
            <p className="article__header__feeds-subfeed">{post.subFeed}</p>
          </div>
        </div>
        <div className="article__header__date">
          <img src={clock} alt="clock" />
          <p className="article__header__date-timestamp">
            {formatPostDate(post.publicationTime)}
          </p>
        </div>
      </header>
      {currentWith > 768 ? (
        <div className="article__hero">
          <img
            src={post.author.imageUrl}
            alt="article-author"
            className="article__hero-avatar"
          />
          <div className="article__hero-text">
            <span>{post.author.name}</span>
            <span>|</span>
            <span>{post.author.companyName}</span>
            <h4 className="article__hero-title">{post.title}</h4>
          </div>
        </div>
      ) : (
        <div className="article__hero-mobile">
          <div className="article__hero-mobile-text">
            <span>{post.author.name}</span>
            <span>|</span>
            <span>{post.author.companyName}</span>
          </div>
          <div className="article__hero-mobile-sub">
            <img
              src={post.author.imageUrl}
              alt="article-author"
              className="article__hero-mobile-avatar"
            />
            <h4 className="article__hero-mobile-title">{post.title}</h4>
          </div>
        </div>
      )}
      <div className="article__content">
        <div className="article__content__text">{parse(cleanHTML)}</div>
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt="article"
            className="article__content__img"
          />
        )}
      </div>
      <footer className="article__footer">
        <button
          type="button"
          className={`article__footer__btn ${isLiked ? 'liked' : 'like'}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <img
            src={isLiked ? heartFill : heart}
            alt="heart"
            className="underlay"
          />
          <img src={heartHover} alt="heart-outline-red" className="overlay" />
          <span className="article__footer__btn-label">
            {isLiked ? 'Liked!' : 'Like'}
          </span>
        </button>
        <button
          type="button"
          className={`article__footer__btn ${isSaved ? 'saved' : 'save'}`}
          onClick={() => setIsSaved(!isSaved)}
        >
          <img
            src={isSaved ? bookmarkFill : bookmark}
            alt="bookmark"
            className="underlay"
          />
          <img
            src={bookmarkHover}
            alt="bookmark-outline-green"
            className="overlay"
          />
          <span className="article__footer__btn-label">
            {isSaved ? 'Saved!' : 'Save'}
          </span>
        </button>
        <button
          type="button"
          className="article__footer__btn"
          onClick={() => setShowModal(!showModal)}
        >
          <img src={threeDots} alt="three-dots" />
        </button>
        {showModal && <PostModal />}
      </footer>
    </article>
  );
};

Post.propTypes = {
  post: object.isRequired,
};

export default Post;
