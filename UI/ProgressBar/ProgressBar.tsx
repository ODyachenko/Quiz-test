import React, { FC } from 'react';
import './styles.scss';

type ProgressBarProps = {
  progress?: number;
};

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progressbar">
      <div
        className="progressbar__inner"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
