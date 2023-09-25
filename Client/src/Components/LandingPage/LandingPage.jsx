import styles from './LandingPage.module.css';
import CallMadeIcon from '@mui/icons-material/CallMade';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const youtubeVideoLink = 'https://youtu.be/kf3yVHJ4WVw';
const facebookPageLink = 'https://www.facebook.com/?locale=es_LA';
const twitterLoginLink = 'https://twitter.com/iniciarsesion?lang=es';
const instagramLoginLink = 'https://www.instagram.com/accounts/login/';

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();

  const redirectToYouTubeVideo = () => {
    window.open(youtubeVideoLink, '_blank');
  };

  const redirectToFacebookPage = () => {
    window.open(facebookPageLink, '_blank');
  };

  const redirectToTwitterLogin = () => {
    window.open(twitterLoginLink, '_blank');
  };

  const redirectToInstagramLogin = () => {
    window.open(instagramLoginLink, '_blank');
  };

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Elements}>
        <div className={styles.TextContainer}>
          <p>
            Nuestro compromiso es ofrecerte piezas que destacan por
            <br />
            su elegancia, comodidad y durabilidad. Explora nuestro
            <br />
            catálogo y descubre la esencia de la moda que te hará
            <br />
            destacar en cualquier ocasión.
          </p>
        </div>
        <div className={styles.ButtonsContainer}>
          <Link onClick={() => loginWithRedirect()} to='/login' className={styles.Button1}>
            INICIAR SESIÓN
          </Link>
          <Link to='/home' className={styles.Button2}>
            VER CATÁLOGO
            <span className={styles.Icon}>
              <CallMadeIcon />
            </span>
          </Link>
        </div>
        <div className={styles.socialsContainer}>
          <button className={styles.socialButtons}>
            <InstagramIcon onClick={redirectToInstagramLogin} />
          </button>
          <button className={styles.socialButtons}>
            <TwitterIcon onClick={redirectToTwitterLogin} />
          </button>
          <button className={styles.socialButtons}>
            <FacebookIcon onClick={redirectToFacebookPage} />
          </button>
          <button className={styles.socialButtons} onClick={redirectToYouTubeVideo}>
            <YouTubeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

