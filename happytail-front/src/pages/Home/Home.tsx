import Navbar from '../../components/Navbar/Navbar'
import PetSearch from '../../components/PetSearch/PetSearch'
import PetCard from '../../components/PetCard/PetCard';

import './Home.scss'

import Estopinha from '../../assets/estopinha.png';

const Home = () => {
    return (
        <div className='flex items-center flex-col w-[100%] h-[100vh]'>
            <Navbar />
            <PetSearch />

            <div className='app__home-content grid grid-cols-5 gap-5'>
                <PetCard
                    name="Estopinha"
                    imageSrc={Estopinha}
                    gender="female"
                    breed="SRD"
                    size="Pequeno"
                />
                <PetCard
                    name="Estopinha"
                    imageSrc={Estopinha}
                    gender="male"
                    breed="SRD"
                    size="Pequeno"
                />
            </div>
        </div>
    )
}

export default Home