import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      species: '',
      location: '',
      images: '',
      about: ''
    };
  }

  onChangeHandler = (event) => {
    // this function takes in information about a new pet inside field and updates the state 
    const field = {}
    field[event.target.name] = event.target.value
    this.setState(field)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('image here:', this.state.images)

    this.props.addPetCallback({
      name: this.state.name,
      species: this.state.species,
      location: this.state.location,
      images: [this.state.images],
      about: this.state.about
    })
  }

  render() {
    return (
      <form  className="new-pet-form">
        <h3>Add a Pet</h3>
        <form className="new-pet-form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input 
              name="name"
              required
              onChange={this.onChangeHandler}
              value={this.state.name} />
            </div>
            <div>
              <label htmlFor="species">Species:</label>
              <input 
              name="species"
              required
              onChange={this.onChangeHandler}
              value={this.state.species} />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input 
              name="location"
              onChange={this.onChangeHandler}
              value={this.state.location} />
            </div>
            <div>
              <label htmlFor="images">Image:</label>
              <input 
              name="images"
              
              onChange={this.onChangeHandler}
              value={this.state.images} />
            </div>
            <div>
              <label htmlFor="about">About:</label>
              <input 
              name="about"
              onChange={this.onChangeHandler}
              value={this.state.about} />
            </div>
              <input
              type="submit"
              value="Add Pet" />
          </form>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }
}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;