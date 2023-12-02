import { AiOutlineClose } from "react-icons/ai";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";

import "./ModalPet.scss";
import { FirestorePetData } from "../../interfaces/pets";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  petInfo: FirestorePetData;
}

const ModalPet: React.FC<ModalProps> = ({ isOpen, onClose, petInfo }) => {
  if (!isOpen) {
    return null;
  }

  const genderIcon =
    petInfo.gender === "male" ? (
      <BiMaleSign size={24} />
    ) : (
      <BiFemaleSign size={24} />
    );

  return (
    <div className="app__modalpet ">
      <div className="app__modalpet-background"></div>
      <div className="app__modal-content shadow-lg">
        <div className="app__modal-header">
          <div>
            <h2>{petInfo?.name}</h2>
            {genderIcon}
          </div>
          <button onClick={onClose}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <img src={petInfo?.image} className="app__modal-image" />

        <div className="pet-modal-dividor"></div>

        <p className="app__modal-description text-center">{petInfo?.temperament}
        </p>

        <div className="modal-infos">
          <div>
            <p className="text-gray-400 text-sm">Raça:</p>
            <p>{petInfo?.breed}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Porte:</p>
            <p> {petInfo?.size}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Temperamento:</p>
            <p>{petInfo?.temperament}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Idade:</p>
            <p>{petInfo?.age} anos</p>
          </div>



          {/* Adicione outras informações adicionais do pet aqui */}
        </div>

        <button className='schedule mt-5'>
          Candidatar-se
        </button>
      </div>
    </div>
  );
};

export default ModalPet;
