import Header from '../../components/Header'
import './Sobre.css'

import HeaderImage from '../../images/minha_img-programan.jpg'
import MyImage from '../../images/eu1.png'

import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'

const Sobre = () => {
    return (
     <>
        <Header title="Sobre Tiago Alcantara" image={HeaderImage}>
        Um breve resumo. 
        </Header>

        <section className="about_story">
            <div className="container about_container">
              <div className="about_section-image">
                  <img src={MyImage} alt="foto perfil" />
              </div>
              <div className="about_section-content">
                 <h1>A Programação</h1>
                 <p>
                    Me chamo Tiago Alcantara, tenho 23 anos, moro no interior da Bahia e estou cusando 
                    Ciência da Computação no 3° periodo.
                 </p>
                 <p>
                    Tudo começou porque fiquei curioso em saber como funcionava um site, resolvi me aprofudar no assunto e acabei me apaixonando.<div/>
                    Foi então que em 2022 decidi mudar de profissão, 
                    comecei a cursar o ensino superior em ciência da computação e a fazer 
                    cursos de programação voltado à JavaScript.<br/>
                 </p>
                 <p>
                    Hoje em dia é meio que impossivel passar um dia sem ecrever códigos,
                    estudar sobre o assunto ou até mesmo não pensar em códigos.
                 </p>
                 <p>
                    Estou em busca do meu primeiro emprego como desenvolvedor Web.
                 </p>
              </div>
            </div>
        </section>

        <section className="about_story">
            <div className="container">
               <div className="about_section-content">
                  <h1>Habilidades</h1>
               </div>
               <div className="about_container">
                  <div className="about_habili">  
                    <span style={{ color:'#f06529' }}><AiOutlineHtml5 /></span>
                    <p>
                      HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web.<br />
                      Define o significado e a estrutura do conteúdo da web.
                    </p>
                  </div>

                  <div className="about_habili">  
                  <span style={{ color:'#2965f1' }}><DiCss3 /></span>
                    <p>
                    CSS (Cascading Style Sheets) é um mecanismo para adicionar estilo a um documento web.<br />
                    O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags.<br />
                    Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.
                    </p>
                  </div> 
               </div>   
            </div>
        </section>
     </>
    )
}

export default Sobre