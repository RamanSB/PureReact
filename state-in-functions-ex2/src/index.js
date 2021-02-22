import React from 'react';
import ReactDOM from 'react-dom';

function RandomList(){
  let randomVals = []; //init empty array
  for(let i=0; i<Math.ceil(Math.random()*10); i++){
    randomVals.push(Math.random());
  } //add numbers to empty array.
  const [randomNums, setRandomNums] = React.useState(randomVals);
  console.log(`Random Values in initial state: ${randomNums}`);

  function addRandNumber(){
      setRandomNums(() => { //when using functional updater form of setting state, we must include the initial state
        return [...randomNums, Math.random()];
      });
  }
  return (
    <div>
      <button onClick={addRandNumber}>Add another random</button>
      <ul>
        {
          randomNums.map(
            (x, idx) => {
              console.log(`[randomNums.map] ${x} | ${idx}`);
              return <li key={idx}>{x}</li>
            }
          )
        }
      </ul>
    </div>
  );
}


ReactDOM.render(<RandomList/>, document.querySelector('#root'));
