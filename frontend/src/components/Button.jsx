import React from 'react'

function Button({ bg, textColor, text, refLink }) {
  return (
    <div className={`${bg} font-semibold ${textColor} rounded-md p-2 w-full`}>
      <a href={refLink} className="flex w-full justify-center ">
        {text}
      </a>
    </div>
  );
};

export default Button;