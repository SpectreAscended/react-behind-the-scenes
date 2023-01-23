import React, { useState, useCallback } from 'react';
import './App.css';
import Button from './components/UI/Button';
import DemoOutput from './components/UI/Demo/DemoOutput';

// LEC
// Use Callback allows us to always pass the same function through reevaluations.  It does this by simply storing the function and passing the function we feed into as a reference to it.  Basically the same as going obj1 = {}, ob2{} = obj1.
// for useCallback we pass our function as a first argument, and the second argument is a dependency array. useCallback(myFunction() {}, [dependencies]).  We need to add the dependency because of Closure.  We are telling React to store that function, and ONLY that function, including its variables and their values, somewhere in memory.  So if we have something that changes, in order for our stored function to see the change we must pass it as a dependency.

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prev => !prev);
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
