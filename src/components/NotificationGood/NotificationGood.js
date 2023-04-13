import css from './NotificationGood.module.css';
import Marquee from 'react-fast-marquee';

export default function NotificationGood({ type }) {
  if (type === 'довольна') {
    return (
      <>
        <iframe
          title="Fun"
          className={css.gif}
          src="https://giphy.com/embed/YnBntKOgnUSBkV7bQH"
          alt="gif"
        ></iframe>
        <Marquee className={css.string} speed={50}>
          &#128536;С Днем рождения, дружбанчиха
          старушка&#129315;&nbsp;&nbsp;&nbsp;
        </Marquee>
      </>
    );
  }

  if (type === 'все бесят') {
    return (
      <>
        <iframe
          title="Fun"
          className={css.gif}
          src="https://giphy.com/embed/KGShkWiPJKTB31cdQ8"
          alt="gif"
        ></iframe>
        <Marquee className={css.string} speed={50}>
          &#128536;С Днем рождения, дружбанчиха
          старушка&#129315;&nbsp;&nbsp;&nbsp;
        </Marquee>
      </>
    );
  }

  if (type === 'башка') {
    return (
      <>
        <iframe
          title="Fun"
          className={css.gif}
          src="https://giphy.com/embed/IbmQvzzgtUVZDfUSQP"
          alt="gif"
        ></iframe>
        <Marquee className={css.string} speed={50}>
          &#128536;С Днем рождения, дружбанчиха
          старушка&#129315;&nbsp;&nbsp;&nbsp;
        </Marquee>
      </>
    );
  }
}
