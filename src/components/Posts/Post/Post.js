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
import './Post.scss';

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="article">
      <header className="article__header">
        <div className="article__header__feeds">
          <span className="article__header__feeds__icon">
            <AiOutlineFileSearch />
          </span>
          <p className="article__header__feeds__feed">feed</p>
          <span className="article__header__feeds__icon">
            <BsCaretRightFill />
          </span>
          <p className="article__header__feeds__subfeed">subfeed</p>
        </div>
        <div className="article__header__date">
          <BsClock />
          <p>article date</p>
        </div>
      </header>
      <div className="article__title">
        <img
          src="https://cdn2.iconfinder.com/data/icons/rounded-labels/154/round-label-sticker-copyright-author-512.png"
          alt="article-author"
          className="article__title__avatar"
        />
        <div className="article__title__text">
          <span>article author</span>
          <span>|</span>
          <span>article author company</span>
          <h4 className="article__title__text__title">article title</h4>
        </div>
      </div>
      <div className="article__content">
        <p>article content</p>
        <img src="" alt="article" />
      </div>
      <footer className="article__footer">
        <button
          type="button"
          className={`article__footer__btn ${isLiked && 'liked'}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? <BsHeartFill /> : <BsHeart />}
          <span>{isLiked ? 'Liked!' : 'Like'}</span>
        </button>
        <button
          type="button"
          className={`article__footer__btn ${isSaved && 'saved'}`}
          onClick={() => setIsSaved(!isSaved)}
        >
          {isSaved ? <BsBookmarkFill /> : <BsBookmark />}
          <span>{isSaved ? 'Saved!' : 'Save'}</span>
        </button>
        <button type="button" className="article__footer__btn-action">
          <BsThreeDots />
        </button>
      </footer>
    </article>
  );
};

export default Post;
