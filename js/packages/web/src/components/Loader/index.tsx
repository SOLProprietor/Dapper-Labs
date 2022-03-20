import { useMeta } from '@oyster/common';
import React, { FC } from 'react';

export const LoaderProvider: FC = ({ children }) => {
  const { isLoading } = useMeta();

  return (
    <>
      <div className={`loader-container ${isLoading ? 'active' : ''}`}>
        <div className="loader-block">
          <div className="loader-title">loading</div>
          <Spinner />
        </div>
      </div>
      {children}
    </>
  );
};

export const Spinner = () => {
  return (
    //<div className="spinner">
    //  <span className="line line-1" />
    //  <span className="line line-2" />
    // <span className="line line-3" />
    //  <span className="line line-4" />
    //  <span className="line line-5" />
    // <span className="line line-6" />
    //  <span className="line line-7" />
    //  <span className="line line-8" />
    // <span className="line line-9" />

    <div className="spinner">
      <div className="helper helper--1">
        <div className="duck-wrapper">
          <div className="duck-hide"></div>
          <div className="duck-body">
            <div></div>
          </div>

          <div className="duck-head">
            <div className="duck-eye"></div>
          </div>

          <div className="duck-mouth"></div>
        </div>
      </div>

      <div className="helper helper--2">
        <div className="duck-wrapper">
          <div className="duck-hide"></div>
          <div className="duck-body">
            <div></div>
          </div>
          <div className="duck-head">
            <div className="duck-eye"></div>
          </div>

          <div className="duck-mouth"></div>
        </div>
      </div>

      <div className="helper helper--3">
        <div className="duck-wrapper">
          <div className="duck-hide"></div>
          <div className="duck-body">
            <div></div>
          </div>
          <div className="duck-head">
            <div className="duck-eye"></div>
          </div>

          <div className="duck-mouth"></div>
        </div>
      </div>

      <div className="duck-land"></div>

      <div className="bubble bubble--1"></div>
      <div className="bubble bubble--2"></div>
      <div className="bubble bubble--3"></div>
      <div className="bubble bubble--4"></div>
      <div className="bubble bubble--5"></div>
      <div className="bubble bubble--6"></div>
      <div className="bubble bubble--7"></div>
      <div className="bubble bubble--8"></div>
    </div>

    //</div>
  );
};
