import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './MoreInfoButton.module.css';

export default function MoreInfoButton() {
  const [isVisible, setIsVisible] = useState(false);

  function showPopup() {
    setIsVisible(true);
  }

  function closePopup() {
    setIsVisible(false);
  }

  return (
    <>
      <button className={styles['button-container']} onClick={showPopup}>
        About Me
      </button>

      {isVisible && (
        <div className={styles['popup-overlay']} onClick={closePopup}>
          <div className={styles['popup-box']} onClick={(e) => e.stopPropagation()}>
            <button className={styles['x']} onClick={closePopup}>x</button>
            <h2>About Me</h2>
            <p>I am a software engineer passionate about clean UI, clever logic, and thoughtful design.</p>
            <div className={styles['second-paragrph']} >
              <p>I recived a Master's in Computer  <br />  Science from Quinnipiac University. <br /> 
              See my full resume <Link className={styles['resume-link']} target="_blank" rel="noopener noreferrer" to={`/resume.pdf`}>here.</Link></p>  
            </div>   
          </div>
        </div>
      )}
    </>
  );
}
