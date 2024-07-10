function Feedback({
    feedback: { good, neutral, bad },
    totalFeedback, positive
  }) {
return (
    <ul>
    <li>good: {good}</li>
    <li>neutral: {neutral}</li>
    <li>bad: {bad}</li>
    {/* <li>total: {totalFeedback}</li>
    <li>positive: {positive} %</li> */}
  </ul>
)
}

 export default Feedback