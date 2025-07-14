import React from 'react';
import { useSelector } from 'react-redux';

function AgeDisplay() {
  const age = useSelector(state => state.age.value);
  const loading = useSelector(state => state.age.loading);

  return (
    <div>
      <h2>Age: {age}</h2>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default AgeDisplay;