import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <br />
      <br />
      <br />
      <StarRating color='red' onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} starts</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      color='orange'
      message={["Terrible", "Bad", "Okey", "good", "Amazing"]}
      className="test"
      defaultRating={3}
      onSetRating={0} />

    <StarRating maxRating={5} />

    <Test />
  </React.StrictMode>
);
