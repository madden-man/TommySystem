import React from 'react';
import './index.css';
import ColorShower from './components/ColorShower';

function App() {
  return (
    <>
      <h1>Colors</h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ColorShower baseColor="blue" />
        <ColorShower baseColor="purple" />
        <ColorShower baseColor="orange" />
        <ColorShower baseColor="yellow" />
        <ColorShower baseColor="gray" />
        <ColorShower baseColor="green" />
      </div>
    </>
  );
}

export default App;
