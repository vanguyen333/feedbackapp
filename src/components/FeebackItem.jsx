import { useState } from 'react';

const FeebackItem = () => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item');

  const handleClick = () => {
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };
  const reset = () => {
    return setRating(7);
  };
  return (
    // Card Container
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default FeebackItem;
