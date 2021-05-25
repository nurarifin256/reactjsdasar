import React from 'react';
import Header from './Header';
import Navbar from './Navbar'

// const Navbar = () => {
//   return (
//     <div>
//       <h5>Navbar</h5>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h2>Hello World</h2>
    </div>
  );
}

export default App;
