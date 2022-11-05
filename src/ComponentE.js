import React,{useContext} from 'react';
import ComponentF from './ComponentF';
import {UserContext,channelContext} from "./App"

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(channelContext) ;

  return (
    <div>
      <ComponentF />
      <h1>this is {user} {channel}</h1>
    </div>
  );
};

export default ComponentE;
