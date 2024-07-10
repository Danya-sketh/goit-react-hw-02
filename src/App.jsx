import { useState } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import './App.css'

function App() {
  
  // const [feedbacks, setFeedbacks] = useState({ good: 0,
  //   netural: 0,
  //   bad: 0, })
  const startFeedback = { good: 0, neutral: 0, bad: 0 };

    const [state, setState] = useState(() => {
      const storageFeedback = window.localStorage.getItem("saveFeedback");
      return storageFeedback !== null
        ? JSON.parse(storageFeedback)
        : startFeedback;
    });
  
    const feedbackReset = () => {
      setState(startFeedback);
    };
    useEffect(() => {
      window.localStorage.setItem("saveFeedback", JSON.stringify(state));
    }, [state]);
  
    let totalFeedback = 0;
  
    const updateFeedback = (feedbackType) => {
      setState({
        ...state,
        [feedbackType]: state[feedbackType] + 1,
      });
    };

  return (
    <div>
      <Description
      name={"Sip Happens Café"}
      descr={
        "Please leave your feedback about our service by selecting one of the options below."
      }
      />
       <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        feedbackReset={feedbackReset}
      />
    </div>
  )
}

export default App
