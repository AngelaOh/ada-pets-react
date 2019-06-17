import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  showPetDetails = (index) => {
     let selectedPet = this.state.petList[index]
     console.log("selected pet image", selectedPet.images)
     console.log('old selected pet', selectedPet)

    this.setState({
      currentPet: selectedPet
    })
    console.log('current pet', this.state.currentPet)

  }

  removePet = (index) => {
    let updatedPetList = this.state.petList
    updatedPetList.splice(index, 1)

    this.setState({
      petList: updatedPetList
    })
  }

  addNewPet = (pet) => {
    const pets = this.state.petList
    pet["id"] = this.state.petList[this.state.petList.length-1].id + 1

    pets.push(pet)
    this.setState({
      petList: pets
    })
  }

  render() {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          { /* Wave 2:  Where Pet Details should appear */ }
        <section>
          { currentPet !== undefined ? < PetDetails currentPet={currentPet} /> : '' }
        </section>
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          <PetList 
          allPets={this.state.petList}
          onSelectPet={this.showPetDetails} 
          onRemovePet={this.removePet}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
          <NewPetForm 
          addPetCallback={this.addNewPet}/>
        </section>
      </main>
    );
  }
}

export default App;
