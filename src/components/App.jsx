
import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';
import { Notification } from './Feedback/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => acc + num, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: 20,
          color: '#010101',
          padding: 30,
          gap: 20,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

