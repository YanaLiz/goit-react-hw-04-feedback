
import  { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';
import { Notification } from './Feedback/Notification';

 function App ()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

   const handleFeedback = event => {
    const button= event.target.name;
     switch (button) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
     return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };


 const feedbackOptions = { good, neutral, bad };
 const options = Object.keys(feedbackOptions);
   
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
            option={options}
            onLeaveFeedback={handleFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
}
  export default App;


