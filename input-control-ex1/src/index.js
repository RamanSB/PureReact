import TextInput from './TextInput.js';
import ReactDOM from 'react-dom';

function Container(){
  
  return (
    <div>
      <TextInput>First Name:</TextInput>
      <br/>
      <TextInput>Last Name:</TextInput>
      <p>{`Hi, ${} `}</p>
    </div>
  );
}


ReactDOM.render((
  <Container/>
), document.querySelector('#root'));
