import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useFormStore } from './useFormStore';

function App() {
  const [count, setCount] = useState(0);
  const { fData, addFdata } = useFormStore();

  const handleAddFdata = () => {
    console.log('click');

    addFdata('John', [
      {
        points: 340,
        option: 'C',
      },
      {
        points: 30,
        option: 'C',
      },
      {
        points: 42,
        option: 'C',
      },
    ]);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 onClick={() => console.log(fData)}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p onClick={() => handleAddFdata()} className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <ChildApp />
    </>
  );
}

export default App;

function ChildApp() {
  const { addFdata } = useFormStore();
  const handleAddFdata = () => {
    addFdata('Bayo', [
      {
        points: 340,
        option: 'B',
      },
      {
        points: 340,
        option: 'A',
      },
    ]);
  };
  return (
    <div>
      <h1 onClick={() => handleAddFdata()}>Child App</h1>
    </div>
  );
}
