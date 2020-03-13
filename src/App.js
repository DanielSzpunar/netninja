import React from 'react';
import './App.css';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends React.Component {
  state = {
    ninjas : [
      {name: 'dan', age: 19, belt: 'white', id:1 },
      {name: 'mike', age: 21, belt: 'green', id:2 },
      {name: 'steve', age: 33, belt: 'orange', id:3 },
      {name: 'john', age: 23, belt: 'blue', id:4 }
    ]
  }
  addNinja = (ninja) => {
    console.log(ninja)
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  //if Id equals ninja.id remove it from list; then repopulate list.
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !==id
    })
    this.setState({
      ninjas:ninjas
    })
  }

  render() {
    return (
      <div>
      <h1>H1 Tag</h1>
        <Ninjas ninjas = {this.state.ninjas} deleteNinja = {this.deleteNinja} />
        <br />
        <AddNinja addNinja = {this.addNinja} />
      </div>
    )
  }
}

export default App;
