import './PetCard.scss';
import Estopinha from '../../assets/estopinha.png';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi'

const PetCard = () => {
    return (
        <div className="app__petcard">
            <img src={Estopinha} alt="" />
            <div className='app__petcard-header'>
                <h2>Estopinha</h2>
                <BiFemaleSign
                    size={24}
                />
            </div>
            <div className="app__petcard-footer">
                <p>SRD</p>
                <span>Pequeno</span>
            </div>
        </div>
    )
}

export default PetCard