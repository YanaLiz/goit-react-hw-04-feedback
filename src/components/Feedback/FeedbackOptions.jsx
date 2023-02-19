import React from 'react';
import css from './Feedback.module.css';
import propTypes from 'prop-types'
export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {option.map(key => {
                return (
                    <li key={key} className={css.list}>
                        <button
                            name={key}
                            className={css.button}
                            type="button"
                            onClick={onLeaveFeedback}
                        >
                            {key}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    option: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;