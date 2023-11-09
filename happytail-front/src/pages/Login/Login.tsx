import './Login.scss'
import icon from '../../assets/X.png'
import Line from '../../assets/Line 1.png'

const Login = () => {
    return (
        <div className='app__loginpage'>
            <div className='app__logincard'>

                <div className='app__header'>
                    <h1 className='app__headertitle'>
                        Login
                    </h1>
                    <button className='app__cancelbutton'>
                        <img src={icon}/>
                    </button>
                </div>
                
                <div className='app__loginfield'>
                    <input type="text" name="Email" placeholder="Digite seu email" className='app__field'/>
                    <input type="text" name="Senha" placeholder="Digite sua senha" className='app__field'/>
                    <button className='app__loginbutton'>
                        Entrar
                    </button>
                </div>


                <div className='app__changefield'>
                    <img src={Line} style={{padding:15 }}/>
                    <button className='app__changebutton'>
                            Entrar como uma ONG
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Login


// 'flex items-center flex-col w-[100%] h-[100vh]'