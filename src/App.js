import React, { useState, useMemo } from 'react';
import ComponentE from './ComponentE';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Title from './Title';
import Folder from './Folder';
import explorer from './data';
import './style.css';

export const UserContext = React.createContext();
export const channelContext = React.createContext();
export default function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      console.log('multiply is called');
      return add * 10;
    },
    [add]
  );
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserContext.Provider value="vishal kushwah">
        <channelContext.Provider value="Guitar channel">
          <ComponentE />
        </channelContext.Provider>
      </UserContext.Provider>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <span>mulitple to add by 10: {multiplication}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>subtraction</button>
      <span>{minus}</span>

      <div>
        <Title title={'Usecallback Demo'} />
      </div>

      <ClickCounter name={'vishal'} />
      <HoverCounter name={'ramesh'} />

      <Folder explorer={explorer} />
    </div>
  );
}
