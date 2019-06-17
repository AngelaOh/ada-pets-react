import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const PetList = (props) => {

  const showPetDetails = (id, name, species, about, location) => {
    console.log('in show pet details function')
    props.onSelectPet(id, name, species, about, location)
  }

  const allPets = props.allPets.map((pet, i) => {

    return (
        <PetCard
        // id={pet.id}
        // name={pet.name}
        // species={pet.species}
        // about={pet.about}
        // location={pet.location} 
        {...pet}
        petDetailsClickCallback={showPetDetails} />
    )
  })

  
  return (
    <div className="card-group">
      { allPets }
    </div>
  )
}

PetList.propTypes = {
  allPets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
