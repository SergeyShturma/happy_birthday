import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from 'components/App.module.css';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import Notification from 'components/Notification/Notification';
import NotificationGood from 'components/NotificationGood/NotificationGood';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selectedOption, setSelectedOption] = useState('none');

  const countTotalFb = () => {
    return good + neutral + bad;
  };

  const countPositiveFbPercentage = () => {
    let total = countTotalFb();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const handleFeedback = type => {
    switch (type) {
      case 'довольна':
        setGood(prevState => prevState + 1);
        setSelectedOption('довольна');
        break;

      case 'все бесят':
        setNeutral(prevState => prevState + 1);
        setSelectedOption('все бесят');
        break;

      case 'башка':
        setBad(prevState => prevState + 1);
        setSelectedOption('башка');
        break;

      default:
        throw new Error();
    }
  };

  return (
    <div className={css.main}>
      <div className={css.wall}>
        <Section title={'Как днюшка проходит?'}>
          <FeedbackOptions onLeaveFeedback={handleFeedback} />
        </Section>
      </div>
      <Section>
        {selectedOption !== 'none' && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFb()}
            positivePercentage={countPositiveFbPercentage()}
          />
        )}
        {selectedOption === 'none' && (
          <Notification message="Давай рассказывай &#128515;" />
        )}
        <NotificationGood type={selectedOption} />
      </Section>
    </div>
  );
}
