import React from "react";
import PropTypes from 'prop-types';
// class Button extends PureComponent  
// Performance-optimized version of React.Component. Doesn’t rerender if props/state hasn’t changed.
const Button = React.memo( // rerender if props changed
  ({
    label = "submit",
    backgroundColor,
    color = "black",
    width = "65px",
    height = "32px",
    className,
  }) => (
      <input
        type="button"
        value={label}
        className={`rounded-pill d-inline  ${className}`}
        style={{ outline: "none", backgroundColor, color, width, height }}
      />
    )
);

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}

// user: PropTypes.shape({
//   name: PropTypes.string,
//   age:  PropTypes.number
// })

export default Button;
