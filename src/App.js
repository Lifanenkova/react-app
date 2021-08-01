import './App.css';
import React from 'react';
// import Counter from './components/Counter';
import UsersList from './components/UsersList';

function App() {
  return <UsersList />
}

export default App;





// function App() {
//   return <Greeting name = 'Vasia'/>;
// }


// import Greeting from './components/Greeting';
// class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        name: 'Vasia',
//        isGreeting: true,
//     };
//   }
  
//   render() {
//     const {name, isGreeting} = this.state;
//     return <Greeting name = {name} isGreeting={isGreeting}/>
//   }
// }
// export default App;