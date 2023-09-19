import './App.css'
import {useState} from 'react'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../src/Dark-Light/theme'
import { Container } from './Dark-Light/styles';

import { GlobalStyles } from './GlobalStyles';

import {FaGithub, FaLinkedin} from 'react-icons/fa'

// IMAGE PROJECTS
import PhotoMe from '../src/img/myPicture.png'
import Todo from '../src/img/projeto-show-todo.png'
import Mario from '../src/img/projeto-show-mario.png'
import Qrcode from '../src/img/projeto-show-qr-code.png'
import GithubFinder from '../src/img/project-github-portifolio.png'

// Styles components
import styles from '../src/styles/Project.module.css'
import NavBar from '../src/styles/NavBar.module.css'
import Aboutme from '../src/styles/Aboutme.module.css'
import project from '../src/styles/Project.module.css'
import Contact  from '../src/styles/Contact.module.css'

//FORM
import FormSend from './Form/Form';

function App() {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Container>
        
      <header>
        <nav>
          <ul className={NavBar.menu}>
            <li><a href="#home" >Início</a></li>  
            <li><a href="#sobre-mim" >Sobre mim</a></li>
            <li><a href="#projects" >Projetos</a></li>
            <li><a href="#contact" >Contatos</a></li>
            <button onClick={() => themeToggler()}>Mudar tema</button>
          </ul>
          
        </nav>
      </header>

      <div id='Container'>
        <section className={Aboutme.homeMe} id='home' >
            <div className={Aboutme.saudation}>
            <h2 className={Aboutme.me}>Olá! meu nome é carlos</h2>
          <p>Tenho 18 anos, sou desenvolvedor web front-end  <br/> e sou apaixonado pela programação.</p>
          <a className={Aboutme.Linkedin} href="https://www.linkedin.com/in/carlos-eduardo-310a5a255/"><FaLinkedin/> Linkedin</a>

          <a className={Aboutme.Github} href="https://github.com/CarlosEduDev"><FaGithub/> Github</a>
            </div>

            <div className={Aboutme.area_photo}>
            <img className={Aboutme.photo} src={PhotoMe} alt="minha foto" />
            </div>
           
          
          
          
        
        </section>
        
        <section className={Aboutme.aboutMe} id='sobre-mim'>

          <div className={Aboutme.border_top}>
          </div>
          <div className={Aboutme.resume}>
            <h3>Um pouco sobre mim:</h3>

            <p>Sou nascido e criado no estado de Rondônia, na cidade de Porto velho. Estudo programação desde novembro de 2022. Eu amo jogos e ver como eles são criados, me apaixonei pela criação de websites e ver como ficam visualmente, e pretendo cursar ciência da computação ou algum curso relacionado a programação.</p>
            </div>

            <div className={Aboutme.why}>
            <h3>Por que escolhi programação?</h3>
            <p> 1 - Escolhi por paixão pela tecnologia;</p>
            <p> 2 - Por incentivo de familiar;</p>
            <p>3 - Amo ver como sites, jogos e aplicativos são criados;</p>
            <p>4 - Tenho afinidade com tecnologia;</p>
            <p>5 - Eu posso trabalhar de onde eu quiser(caso eu trabalhe remotamente);</p>
            <p>6 - Amo aprender algo relacionado a tecnologia;</p>
            <p>7 - Acho muito interessante a criação de sites, aplicativos;</p>
            <p>8 - Eu amo ver as minhas criações visualmente(front-end).</p>
            </div>

            <div className={Aboutme.skills}>
              <h3>Minhas Skills:</h3>
              <ul>
                <li>HTML - avançado</li>
                <li>CSS - avançado</li>
                <li>JavaScript - intermediário</li>
                <li>Typescript - iniciante</li>
                <li>React - intermediário</li>
                <li>styled-components - iniciante</li>
              </ul>
            </div>
            <div className={Aboutme.border_bottom}>
          </div>
            
            
          
        </section>

        <section id='projects'>
          <div className={project.projects_area}>
            <h3>Meus projetos recentes: </h3>
            <div className={project.card_projects}>

              <div className={styles.project_item}>
            <a href="https://carlosedudev.github.io/To-do-list/"><img className={styles.img_projects} src={Todo} /></a>
            <a href="https://carlosedudev.github.io/To-do-list/"><button>To-do list</button></a>
               </div>

               <div className={styles.project_item}>
            <a href="https://carlosedudev.github.io/Game-Mario/"><img className={styles.img_projects} src={Mario} /></a>
            <a href="https://carlosedudev.github.io/Game-Mario/"><button>Mario Jump</button></a>
               </div>

               <div className={styles.project_item}>
            <a href="https://carlosedudev.github.io/Qr-Code/"><img className={styles.img_projects} src={Qrcode} /></a>
            <a href="https://carlosedudev.github.io/Qr-Code/"><button>Qr-Code</button></a>
               </div>

               <div className={styles.project_item}>
            <a href="https://github-finder-rho-one.vercel.app/"><img className={styles.img_projects} src={GithubFinder} /></a>
            <a href="https://github-finder-rho-one.vercel.app/"><button>Github Finder</button></a>
               </div>

               
            </div>
            <p>Caso queira ver mais de meus projetos, clique no botão abaixo e você será redirecionado ao meu repositório do github.</p>
               
          </div>

          <a href="https://github.com/CarlosEduDev?tab=repositories"><button className={styles.button_repo} >Ver mais projetos</button></a>

        </section>

        <section className={Contact.contact} id='contact'>
          <h2>Contate-se comigo!</h2>
          <p>Podemos evoluir juntos, estou a sua espera! 😊</p>
          <FormSend/>

          <div className={Contact.footer}>
            <ul >
              <li><a className={Contact.Github}  href="https://github.com/CarlosEduDev"><FaGithub/></a></li>
              <li><a className={Contact.Linkedin} href="https://www.linkedin.com/in/carlos-eduardo-310a5a255/"><FaLinkedin/></a></li>
              
            </ul>
            
          </div>
          
        </section>
      </div>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
