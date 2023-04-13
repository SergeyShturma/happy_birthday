import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import css from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <>
      <Marquee className={css.string} speed={50}>
        &#128536;С Днем рождения, дружбанчиха
        старушка&#129315;&nbsp;&nbsp;&nbsp;
      </Marquee>
      <p className={css.message}>{message}</p>
      <iframe
        title="Fun"
        className={css.gif}
        src="https://giphy.com/embed/VGbsjSuQAnj0rWFF4o"
        alt="gif"
      ></iframe>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
