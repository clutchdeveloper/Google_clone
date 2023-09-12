import React from 'react'

function Avatar({url, className}) {
  return (
    <>
      <img loading="lazy" className={`${className} rounded-full h-10 cursor-pointer transition duration-150 transfrom hover:scale-110`} src={url} alt="profile pic" />
    </>
  );
}

export default Avatar