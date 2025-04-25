import React from 'react';
import { Link } from 'react-router-dom';

function Button({ bg, textColor, text, refLink }) {
  return (
    <div className={`${bg} font-semibold ${textColor} rounded-md p-2 w-full`}>
      <Link to={refLink} className="flex w-full justify-center">
        {text}
      </Link>
    </div>
  );
}

export default Button;
