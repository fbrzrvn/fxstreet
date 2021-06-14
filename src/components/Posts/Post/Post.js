import { sanitize } from 'dompurify';
import parse from 'html-react-parser';
import { object } from 'prop-types';
import React, { useState } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import {
  BsBookmark,
  BsBookmarkFill,
  BsCaretRightFill,
  BsClock,
  BsHeart,
  BsHeartFill,
  BsThreeDots,
} from 'react-icons/bs';
import { formatPostDate } from '../../../helpers';
import './Post.scss';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const cleanHTML = sanitize(post.content, {
    USE_PROFILES: { html: true },
  });

  return (
    <article className="article">
      <header className="article__header">
        <div className="article__header__feeds">
          <span className="article__header__feeds__icon">
            <AiOutlineFileSearch />
          </span>
          <p className="article__header__feeds__feed">{post.feed}</p>
          <span className="article__header__feeds__icon">
            <BsCaretRightFill />
          </span>
          <p className="article__header__feeds__subfeed">{post.subFeed}</p>
        </div>
        <div className="article__header__date">
          <BsClock />
          <p>{formatPostDate(post.publicationTime)}</p>
        </div>
      </header>
      <div className="article__title">
        <img
          src={post.author.imageUrl}
          alt="article-author"
          className="article__title__avatar"
        />
        <div className="article__title__text">
          <span>{post.author.name}</span>
          <span>|</span>
          <span>{post.author.companyName}</span>
          <h4 className="article__title__text__title">{post.title}</h4>
        </div>
      </div>
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
          {isLiked ? <BsHeartFill /> : <BsHeart />}
          <span>{isLiked ? 'Liked!' : 'Like'}</span>
        </button>
        <button
          type="button"
          className={`article__footer__btn ${isSaved ? 'saved' : 'save'}`}
          onClick={() => setIsSaved(!isSaved)}
        >
          {isSaved ? <BsBookmarkFill /> : <BsBookmark />}
          <span>{isSaved ? 'Saved!' : 'Save'}</span>
        </button>
        <button type="button" className="article__footer__btn">
          <BsThreeDots />
        </button>
      </footer>
    </article>
  );
};

Post.propTypes = {
  post: object.isRequired,
};

export default Post;
