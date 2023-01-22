import React from 'react';
import MyParagraph from './MyParagraph';

// REACT MEMO

// To avoid having components re-evaluate every time their parent component runs we can wrap it in React.memo.  This basically stores the props in a state and checks to see if props have changed. If not, this component won't be evaluated.  This comes at a performance cost, so you must weigh the pros of checking this state versus the component and its children reevaluating.  If you have a huge component tree, this may be beneficial.

// It is important to note that this only works for primative values.  If you are passing a function through props that is called in a parent component, it will be re-evaluated.  Every time a component re-evaluates a new function is created, which is basically an object.  Two objects, even if they contain the same code are not the same, because objects are just a reference to an object in memory.

//LEC For a solution to this problem see useCallback

const DemoOutput = props => {
  console.log('DEMOOUTPUT RUNNING');

  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
