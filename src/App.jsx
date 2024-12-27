import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

    async function getAdvice() {
     const res = await fetch('https://api.adviceslip.com/advice');
     const data = await res.json();
     setAdvice(data.slip.advice);
     //setCount(c => c + 1);

    }

    useEffect(() => {
      getAdvice();
    },[]);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-300'>
      <h1 className='text-2xl'>Advice : <span className='font-bold'>{advice}</span></h1>
      <button className='m-14 p-4 active:scale-[.98] bg-black text-white translate-x-0' onClick={getAdvice}>Get Advice</button>
      {/* <Message count={count} /> */}
    </div>
  );
}

//  function Message(props) {
//   return <div className=''>You get <strong>{props.count}</strong> advices.</div>
// }

export default App;
