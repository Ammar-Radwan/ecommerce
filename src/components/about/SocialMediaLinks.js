import React from 'react';

const SocialMediaLinks = () => {

  return (
    <div className="buttons">
      <a
        href="https://www.facebook.com/your-facebook-page"
        target="_blank"
        className="d-inline buttons ml-0 mx-2"
      >
        <i class="fa-brands fa-facebook"/>
      </a>
      <a
        href="https://twitter.com/your-twitter-profile"
        target="_blank"
        className="d-inline buttons mx-2"
      >
        <i class="fa-brands fa-twitter"/>
      </a>
      <a
        href="https://www.instagram.com/your-instagram-profile"
        target="_blank"
        className="d-inline buttons mx-2"
      >
        <i class="fa-brands fa-instagram"/>
      </a>
      <p>
        Call Center : 15075 <br />
        Email : seamless@gmail.com
      </p>
    </div>
  );
};

export default SocialMediaLinks;
