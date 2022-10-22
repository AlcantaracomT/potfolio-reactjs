import Header from '../../components/Header'
import HeaderImage from '../../images/minha_img-programan.jpg'
import './Sobre.css'

const Sobre = () => {
    return (
        <>
        <Header title="Sobre Tiago Alcantara" image={HeaderImage}>
        Um breve resumo de quem sou eu. 
        </Header>

        <section className="about_story">
            <div className="container about_story-container">
              <div className="about_section-image">
                <img src="" alt="" />
              </div>
              <div className="about_section-content">
                 <p>
                 Tenho 23 anos, moro no interior da Bahia, na cidade em que descobriram o Brasil, 
                 Santa Cruz Cabralia.... 
                 </p>
              </div>
            </div>
        </section>

        <section className="about_storyOne">
            <div className="container about_storyOne-container">
               <div className="about_section-image">
                <img src="" alt="" />
               </div>
               <div className="about_section-content">
                   <h1>A Programação</h1>
                   <p>
                    Tudo começou porque fiquei curioso pra saber como funciona um site, e fui pesquisar,
                    descobri simbolos com letras misturados e não consegui entender nada, resolvi me aprofudar naquilo e acabei me apaixonando.
                    Foi então que em 2022 eu decidi mudar de profissão, 
                    comecei a cursar o ensino superior em ciência da computação e a fazer 
                    cursos de programação voltado à JavaScript.
                    Hoje em dia é meio que impossivel passar um dia sem ecrever códigos,
                    estudar sobre o assunto ou até mesmo não pensar em códigos. 
                    Atualmente trabalho em uma empresa que faz à distribuição de produtos químicos e 
                    estou em busca do meu primeiro emprego em desenvolvimento Web
                    </p>
                </div>
         </div>
        </section>
        </>
    )
}

export default Sobre