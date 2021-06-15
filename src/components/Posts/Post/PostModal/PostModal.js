import React, { useState } from 'react';
import { BsArrowLeft, BsCircle, BsEyeSlash } from 'react-icons/bs';
import { IoOptionsOutline } from 'react-icons/io5';
import { modalData } from './modalData';
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
        <span className="modal__btn-text">Hide</span>
      </button>
      <button type="button" className="modal__btn">
        <IoOptionsOutline />
        <span className="modal__btn-text">Improve my feed</span>
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
            {modalData.map((data) => (
              <div key={data.id} className="modal__hide__body__item">
                <span>
                  <BsCircle />
                </span>
                <span className="modal__hide__body__item-text">
                  {data.text}
                </span>
              </div>
            ))}
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
