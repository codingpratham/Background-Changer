import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('white');

  return (
    <div className='min-h-screen w-full duration-200' style={{ backgroundColor: color }}>
       <div className='flex justify-center items-center h-20'>
        <h1 className='text-center font-bold text-2xl bg-gray-800 text-white px-4 py-2 rounded'>
          BG Changer
        </h1>
      </div>
      <div className='flex flex-wrap justify-center items-center text-center min-h-96 space-x-2 space-y-2'>
        <button
          type="button"
          onClick={() => setColor('black')}
          className='text-white bg-black h-14 w-20 rounded-xl'
        >
          Black
        </button>

        <button
          type="button"
          onClick={() => setColor('white')}
          className='text-black bg-white h-14 w-20 rounded-xl'
        >
          White
        </button>

        <button
          type="button"
          onClick={() => setColor('blue')}
          className='text-white bg-blue-800 h-14 w-20 rounded-xl'
        >
          Blue
        </button>

        <button
          type="button"
          onClick={() => setColor('red')}
          className='text-white bg-red-800 h-14 w-20 rounded-xl'
        >
          Red
        </button>

        <button
          type="button"
          onClick={() => setColor('green')}
          className='text-white bg-green-800 h-14 w-20 rounded-xl'
        >
          Green
        </button>

        <button
          type="button"
          onClick={() => setColor('yellow')}
          className='text-white bg-yellow-500 h-14 w-20 rounded-xl'
        >
          Yellow
        </button>

        <button
          type="button"
          onClick={() => setColor('indigo')}
          className='text-white bg-indigo-700 h-14 w-20 rounded-xl'
        >
          Indigo
        </button>

        <button
          type="button"
          onClick={() => setColor('cyan')}
          className='text-white bg-cyan-600 h-14 w-20 rounded-xl'
        >
          Cyan
        </button>
      </div>
    </div>
  );
}

export default App;
