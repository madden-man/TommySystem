import React from 'react';
import './index.css';
// import ColorShower from './components/ColorShower';
import Button from './components/Button';

function App() {
  return (
    <div className="tom-l-container" style={{textAlign: 'center'}}>
      {/* <h1>Colors</h1>
      <div className="tom-l-rounded-border" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        <ColorShower baseColor="blue" />
        <ColorShower baseColor="purple" />
        <ColorShower baseColor="orange" />
        <ColorShower baseColor="yellow" />
        <ColorShower baseColor="gray" />
        <ColorShower baseColor="green" />
      </div> */}

      <Button
        appearance="primary"
        className="margin-top-x2"
      >
        Click Me!
      </Button>
      <Button
        appearance="secondary"
        className="margin-left-x2"
      >
        Why are you working here?
      </Button>
    </div>
  );
}

export default App;
