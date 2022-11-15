import React from 'react';

const Debounce = () => {
  let Counter = 0;
  const getData = () => {
    console.log('fetch Data', Counter++);
  };

  const debounceFunc = function (fn, d) {
    let timer;
    return function () {
      let context = this;
      args = arguments;
      clearInterval(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };
  const doSomeMagic = debounceFunc(getData, 3000);
  return (
    <div>
      <input type="text" onChange={() => doSomeMagic()} />
    </div>
  );
};

export default Debounce;
