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
      image: '',
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

    this.props.addPetCallback({
      name: this.state.name,
      species: this.state.species,
      location: this.state.location,
      image: this.state.image,
      about: this.state.about
    })
  }

  render() {
    return (
      <form  className="new-pet-form">
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }

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
              <label htmlFor="image">Image:</label>
              <input 
              name="image"
              required
              onChange={this.onChangeHandler}
              value={this.state.image} />
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