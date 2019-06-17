import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const PetList = (props) => {

  const showPetDetails = (index) => {
    console.log('in show pet details function')
    props.onSelectPet(index)
  }

  const removePet = (index) => {
    props.onRemovePet(index)
  }

  const allPets = props.allPets.map((pet, i) => {

    return (
        <PetCard
        // id={pet.id}
        // name={pet.name}
        // species={pet.species}
        // about={pet.about}
        // location={pet.location} 
        index={i}
        {...pet}
        petDetailsClickCallback={showPetDetails} 
        removePetCallback={removePet}/>
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
  onRemovePet: PropTypes.func,
};

export default PetList;
