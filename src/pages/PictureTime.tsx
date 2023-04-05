// React
import { FC } from 'react';

// react-router-dom
import { Link } from 'react-router-dom';

// images
import yoshi from '../images/yoshi.png';
import camera from '../images/camera.png';

// styles
import '../styles/components/PictureModal.scss';

const PictureTime = () => {
  return (
    <div className="pictureBackground">
      <div className="pictureModal">
        <div className="cameraContainer">
          <img className="yoshi" src={yoshi} alt="yoshi" />
          <img className="camera" src={camera} alt="marioAndLuigi" />
        </div>

        <h1 className="secondaryFont">TAKE A GROUP PHOTO!</h1>
        <Link className="btn" to="/question13" >
          Next Question
        </Link>
      </div>
    </div>
  );
};

export default PictureTime;
