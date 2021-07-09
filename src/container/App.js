import React,{ Component } from 'react';
import './App.css';
import Nav from '../components/Nav';
import FriendCards from '../components/FriendCards';
import users from '../users';


class App extends Component {
  constructor(){ 
      super();
      this.state = { // Creando nuestro estado
          usersArray: users,
          searchfield: ''
      }
  }
  componentDidMount(){
    this.setState({filteredUsers: users}) 
  }
  validSearchUser = (event) => {
    this.setState({ searchfield: event.target.value }) // actualiza la propiedad con la entradas del input 
  }
  render(){ 
    const { usersArray, searchfield } = this.state;
    const filteredUsers = usersArray.filter(user =>{
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(filteredUsers.length === 0){
      return (
        <div className="App">
          <Nav validSearchUser={this.validSearchUser}/>
          <div className='usuariosNoEncontrados'>
            <h1>No se encotraron Usuarios...</h1>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <Nav validSearchUser={this.validSearchUser}/>
        
        <FriendCards usersArray={filteredUsers}/>
      </div>
    );
  }
}

export default App;
/*
const validSearchUser = (event) => {
    const userSearch = event.target.value;
    const usersArrayValid =  users.filter((user) => {
      return user.name.toLowerCase().includes(userSearch.toLowerCase());
    })
    return usersArrayValid;
  }
*/