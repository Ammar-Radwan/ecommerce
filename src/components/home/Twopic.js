import React from 'react';

const Pics = ({ image1Src, image2Src }) => {
    return (
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={image1Src} alt="Image 1" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={image2Src} alt="Image 2" className="img-fluid" />
          </div>
        </div>
      );
};

export default Pics;
