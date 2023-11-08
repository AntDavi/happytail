import React, { useState } from 'react';
import './PetSearch.scss'
import DropDownResearch from '../DrowpDownResearch/DropDownResearch';


const PetSearch = () => {
    const [specie, setSpecie] = useState('');
    const [race, setRace] = useState('');
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');

    const specieOptions = [
        { value: 'dog', label: 'Cão' },
        { value: 'cat', label: 'Gato' },
    ];

    const raceOptions = [
        { value: 'angora', label: 'Angorá' },
        { value: 'bengal', label: 'Bengal' },
        { value: 'persa', label: 'Persa' },
        { value: 'ragdoll', label: 'Ragdoll' },
        { value: 'rnd', label: 'RND' },
    ]

    const sizeOptions = [
        { value: 'small', label: 'Pequeno' },
        { value: 'medium', label: 'Medio' },
        { value: 'big', label: 'Grande' },
    ]

    const genderOptions = [
        { value: 'male', label: 'Macho' },
        { value: 'female', label: 'Fêmea' },
    ]


    return (
        <div className='app__petresearch'>
            <DropDownResearch
                label="Espécies"
                value={specie}
                items={specieOptions}
                onChange={setSpecie}
            />
            <DropDownResearch
                label="Raças"
                value={race}
                items={raceOptions}
                onChange={setRace}
            />
            <DropDownResearch
                label="Porte"
                value={size}
                items={sizeOptions}
                onChange={setSize}
            />
            <DropDownResearch
                label="Gênero"
                value={gender}
                items={genderOptions}
                onChange={setGender}
            />
            <button className='ml-3'>
                Encontrar
            </button>
        </div>
    )
}

export default PetSearch