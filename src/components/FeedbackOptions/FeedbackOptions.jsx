import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function classSerch(option) {
  if (option === 'good') {
    return css.good;
  } else if (option === 'neutral') {
    return css.neutral;
  } else return css.bad;
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={classSerch(option)}
      key={option}
      type="button"
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
