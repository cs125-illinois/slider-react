import React, {useEffect, useState} from 'react';
import './App.css';

import { subscribeToTimer } from './api';

function App (props) {
  const [timestamp, setTimestamp] = useState('No timestamp yet');

  useEffect(() => {
    subscribeToTimer((err, newTimestamp) => {
      setTimestamp(newTimestamp);
    });
  }, [props]);

  return (
    <div className="App">
      <p className="App-intro">
      This is the timer value: {timestamp}
      </p>
    </div>
  );
}

export default App;
