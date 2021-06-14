import React, { useState } from 'react';
import { BsArrowLeft, BsCircle, BsEyeSlash } from 'react-icons/bs';
import { IoOptionsOutline } from 'react-icons/io5';
import './PostModal.scss';

const PostModal = () => {
  const [hide, setHide] = useState(false);

  return (
    <div className="modal">
      <button
        type="button"
        className="modal__btn"
        onClick={() => setHide(!hide)}
      >
        <BsEyeSlash />
        <span>Hide</span>
      </button>
      <button type="button" className="modal__btn">
        <IoOptionsOutline />
        <span>Improve my feed</span>
      </button>
      {hide && (
        <div className="modal__hide">
          <div className="modal__hide__header">
            <button
              type="button"
              className="modal__hide__header__btn"
              onClick={() => setHide(false)}
            >
              <BsArrowLeft />
              <span className="modal__hide__header__btn-text">
                Tell us why:
              </span>
            </button>
          </div>
          <div className="modal__hide__body">
            <div className="modal__hide__body__item">
              <BsCircle />
              <span>I&apos;n not interested in this author</span>
            </div>
            <div className="modal__hide__body__item">
              <BsCircle />
              <span>I&apos;n not interested in this topic</span>
            </div>
            <div className="modal__hide__body__item">
              <BsCircle />
              <span>I&apos;ve seen too many posts on this topic</span>
            </div>
            <div className="modal__hide__body__item">
              <BsCircle />
              <span>The information is incorrect</span>
            </div>
            <div className="modal__hide__body__item">
              <BsCircle />
              <span>I&apos;ve seen this this post before</span>
            </div>
            <div className="modal__hide__body__item">
              <BsCircle />
              <span>Other reasons</span>
            </div>
          </div>
          <div className="modal__hide__footer">
            <button type="button" className="modal__hide__footer__btn">
              Hide content
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostModal;
