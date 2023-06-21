import PropTypes from 'prop-types';
import css from './Section.module.css';
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div className={css.feedback}>
      <h1>{title}</h1>
      <section className={css.buttonSection}>{children[0]}</section>
      <section>{children[1]}</section>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
