import React from 'react';
import ComponentE from './ComponentE';
import './style.css';

export const UserContext = React.createContext();
export const channelContext = React.createContext();
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserContext.Provider value="vishal kushwah">
          <channelContext.Provider value="Guitar channel">
              <ComponentE />
          </channelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
