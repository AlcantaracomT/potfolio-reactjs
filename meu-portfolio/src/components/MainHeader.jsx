import {Link} from 'react-router-dom'
import Image from '../images/minha_img-dark.png'

const MainHeader = () => {
    return (
        <header className="main_header">
            <div className="container main_header_container">
                <div className="container main_header_left">
                    <h4>Olá, sou o</h4>
                    <h1>Tiago Alcantara</h1>
                    <p>desenvolvedor iniciante</p>
                    <Link to="/contato" className='btn btn_mainHeader'>Vamos Trabalhar Juntos!</Link>
                </div>
                <div className="container main_header_right">
                    <div className="main_header_image">
                        <img className='img_Home' src={Image} alt="foto de Tiago"/>
                    </div>
                </div>
            </div>           
        </header>
    )
}

export default MainHeader