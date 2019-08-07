import React from 'react';
import './App1.css';
import Sidebar2 from './Sidebar2/Sidebar2';
import Head from './Head/Head';
import Expenditure from './Admin/Expenditure/Expenditure';
// import AAssignment from './Admin/Assignment/Assignment';
// import SAssignment from './Student Assignment/Assignment'

function App() {
  return (
    <div className="App">
      <Head />
      <Sidebar2 />
      <Expenditure />
      {/* <AAssignment /> */}
      {/* <SAssignment /> */}
    </div>
  );
}

export default App;
