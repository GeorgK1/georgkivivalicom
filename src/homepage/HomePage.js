import './style.css';
import '@fortawesome/react-fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='homepage-wrapper'>

            <div className='links'>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
               
            </div>

            <div className='buttons'>
                <a
                    href='https://www.github.com/GeorgK1'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                    href='mailto:georgkivivali7@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
    );
}
export default HomePage;
