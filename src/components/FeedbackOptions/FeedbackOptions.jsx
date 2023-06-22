import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function nameButton(option) {
  return option.charAt(0).toUpperCase() + option.slice(1);
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={css[option]}
      key={option}
      type="button"
      onClick={onLeaveFeedback}
    >
      {nameButton(option)}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
