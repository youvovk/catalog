import React from "react";

const classNames = require('classnames');

export const Row = ({ children, additionalClass = '' }) => {
  return <div className={classNames('c-card__row', { [additionalClass]: !!additionalClass })}>{children}</div>
};