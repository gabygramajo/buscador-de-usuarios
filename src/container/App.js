import './App.css';
import Nav from '../components/Nav';
import FriendCards from '../components/FriendCards';
import users from '../users';


function App() {
  return (
    <div className="App">
      <Nav />
      <FriendCards usersArray={users}/>
    </div>
  );
}

export default App;
