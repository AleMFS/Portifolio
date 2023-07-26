
import LOL from '../assets/projects/LOL.png'
import TopVentos from '../assets/projects/TopVentos.png'
import Coffee from '../assets/projects/Coffee.png'
import Timer from '../assets/projects/Timer.png'
import blog from '../assets/projects/GitHubBlog.gif'
import Todo from '../assets/projects/ToDo.png'


export const tools = [
    {
        id: 0,
        name: 'HTML',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        id: 1,
        name: 'CSS3',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        id: 2,
        name: 'JavaScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        id: 3,
        name: "TypeScript",
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
        id: 4,
        name: 'ReactJs',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        id: 9,
        name: "Tailwind",
        img: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"
    },
    {
        id: 5,
        name: 'Java',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
        id: 6,
        name: 'SpringBoot',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
    },
    {
        id: 7,
        name: 'GitHub',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
        id: 8,
        name: 'MySQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
]

export const projects = [
    {
        id: 0,
        name: "Project LOL",
        about: "Eu criei o projeto 'ProjectLOL' usando a API da Riot Games. O objetivo do projeto era criar uma página web para jogadores de League of Legends, onde eles pudessem obter informações detalhadas sobre seus personagens favoritos, como Lore e skins dos personagens .",
        img: LOL,
        tag: "REACT",
        repository: "https://github.com/AleMFS/LeagueOfLegends",
        link: "https://projectlol.netlify.app/"
    
    },
    {
        id: 1,
        name: "Top Ventos",
        about: "Eu criei um projeto chamado TopVentos no qual ele simula uma loja de ventiladores de algumas marcas com suas informações , pensei em fazer esse projeto devido ao calor que está fazendo nesse verão",
        img: TopVentos,
        tag:"REACT",
        repository: "https://github.com/AleMFS/TopVentos",
        link:"https://top-ventos.netlify.app/"
    },

    
    {
        id: 2,
        name: "Coffee Delivery",
        about: "Coffee Delivery simula uma E-commerce focado em Cafés, ele conta com carrinho onde você pode adicionar e remover a sua escolha, formulário pde endereço para entrega, ele é totalmente responsivo e conta com filtros",
        img:  Coffee,
        tag: "REACT",
        repository: "https://github.com/AleMFS/Coffee-Delivery" ,
        link: "https://coffee-deliveryamf.netlify.app/"
    },
    {
        id: 3,
        name: "Pomodoro Timer",
        about:"Um cronomêtro feito com Reactjs, para auxiliar com estudos usando o metodo mundialmente conhecido como Pomodoro.",
        img: Timer,
        tag:"REACT",
        repository: "https://github.com/AleMFS/Pomodoro-Timer",
        link:"https://github.com/AleMFS/Pomodoro-Timer"

    },
    {
        id:4,
        name: "Github Blog",
        about: "O Github Blog é uma aplicação web que tem como objetivo mostrar visualmente com um design e layout mais bem elaborado os dados do criador deste aplicação, além das issues presentes neste mesmo repositório no Github, permitindo também a pesquisa por issues específicas.",
        img:blog,
        tag:"React/Axios",
        repository: "https://github.com/AleMFS/Github-Blog",
        link: "https://github.com/AleMFS/Github-Blog"
    },
    {
        id:5,
        name:"Todo List",
        about: "Criação de lista de tarefas completamente resposiva, com botão delete e concluida.",
        img:Todo,
        tag: "REACT",
        repository: "https://github.com/AleMFS/Projeto-To-do",    
        link:"todotarefas.netlify.app"
    }
  
    
]
