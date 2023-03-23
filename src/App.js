import React from 'react';
import Name from './components/Title';
import Paragraph from './components/Paragraph';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';
// import SubmitButton from './components/Photo';

function App() {
  return (
    <div>
      <Name />
      <Paragraph />
      <Input />
      <SubmitButton />
      {/* <Photo /> */}
    </div>
  );
}

export default App;

