// ModalAppPet.tsx

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./ModalAddPet.scss";
import { AiOutlineClose } from 'react-icons/ai';

interface ModalAppPetProps {
    isOpen: boolean;
    onClose: () => void;
    onAddPet: (petData: PetData) => void;
}

interface PetData {
    photo: string;
    name: string;
    age: string;
    temperament: string;
    size: string;
    gender: string;
    breed: string;
    species: string;
    description: string;
}

const ModalAppPet: React.FC<ModalAppPetProps> = ({ isOpen, onClose, onAddPet }) => {
    const [petData, setPetData] = useState<PetData>({
        photo: "",
        name: "",
        age: "",
        temperament: "",
        size: "",
        gender: "",
        breed: "",
        species: "",
        description: "",
    });

    const handleInputChange = (field: keyof PetData, value: string) => {
        setPetData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleAddPet = () => {
        // Valide os dados conforme necessário antes de adicionar o pet
        onAddPet(petData);
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-app-pet">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title">Adicione um Pet para adoção</h1>
                    <button className="modal-close-button" onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>

                <div className="form-fields flex flex-col items-center justify-center">
                    <TextField
                        id="outlined-photo"
                        label="Adição de foto"
                        variant="outlined"
                        className="app__field"
                        value={petData.photo}
                        onChange={(e) => handleInputChange("photo", e.target.value)}
                    />

                    <TextField
                        id="outlined-name"
                        label="Nome do Pet"
                        variant="outlined"
                        className="app__field"
                        value={petData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                    />

                    <TextField
                        id="outlined-age"
                        label="Idade"
                        variant="outlined"
                        className="app__field"
                        value={petData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                    />

                    <TextField
                        id="outlined-temperament"
                        label="Temperamento"
                        variant="outlined"
                        className="app__field"
                        value={petData.temperament}
                        onChange={(e) => handleInputChange("temperament", e.target.value)}
                    />

                    <TextField
                        id="outlined-size"
                        label="Porte"
                        variant="outlined"
                        className="app__field"
                        value={petData.size}
                        onChange={(e) => handleInputChange("size", e.target.value)}
                    />

                    <TextField
                        id="outlined-gender"
                        label="Sexo"
                        variant="outlined"
                        className="app__field"
                        value={petData.gender}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                    />

                    <TextField
                        id="outlined-breed"
                        label="Raça"
                        variant="outlined"
                        className="app__field"
                        value={petData.breed}
                        onChange={(e) => handleInputChange("breed", e.target.value)}
                    />

                    <TextField
                        id="outlined-species"
                        label="Espécie"
                        variant="outlined"
                        className="app__field"
                        value={petData.species}
                        onChange={(e) => handleInputChange("species", e.target.value)}
                    />

                    <TextField
                        id="outlined-description"
                        label="Descrição"
                        variant="outlined"
                        className="app__field"
                        multiline
                        rows={4}
                        value={petData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                </div>

                <div className="button-container">
                    <Button variant="contained" onClick={handleAddPet}>
                        Cadastrar PET
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ModalAppPet;
