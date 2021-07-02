import React, { useState } from 'react';
import arrowLeft from '../../../../assets/icons/arrowLeft.svg';
import circle from '../../../../assets/icons/circle.svg';
import eyeSlash from '../../../../assets/icons/eyeSlash.svg';
import options from '../../../../assets/icons/options.svg';
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
        <img src={eyeSlash} alt="eye-slash" />
        <span className="modal__btn-text">Hide</span>
      </button>
      <button type="button" className="modal__btn">
        <img src={options} alt="options" />
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
              <img src={arrowLeft} alt="arrow-left" />
              <span className="modal__hide__header__btn-text">
                Tell us why:
              </span>
            </button>
          </div>
          <div className="modal__hide__body">
            {modalData.map((data) => (
              <div key={data.id} className="modal__hide__body__item">
                <span>
                  <img src={circle} alt="circle" />
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
