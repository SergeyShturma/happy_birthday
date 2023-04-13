import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.list}>
    <li className={css.list_good}>В принципе довольна: {good}</li>
    <li className={css.list_neutral}>Все бесят: {neutral}</li>
    <li className={css.list_bad}>Башка болит: {bad}</li>
    <li className={css.list_total}>Всего наклацала: {total}</li>
    <li className={css.list_pos}>Процент счастья: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
