import logo from './logo.svg';
import './App.css';
import Profile from './Component/Profile/Profile'
function App() {
  const alertMyInput = fullName => alert(fullName);
  return (
    <div className="App">
  <Profile fullName="Mouna"  bio="If I Die Don't cry see at the sky and say Good bye!" profession="Developpeuse web" alertMyInput={alertMyInput}  ><img src="/monia.jpeg" width="150px" height="200px"/></Profile>
 
    </div>
  );
}

export default App;
