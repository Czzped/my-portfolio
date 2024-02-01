import dummyShopImg from "../assets/portfolio-imgs/dummy-shop.png"
import pomodoroTimerImg from "../assets/portfolio-imgs/pomodoro-timer.png"
import myTodoListImg from "../assets/portfolio-imgs/my-todo-list.png"
import appLandingPageImg from "../assets/portfolio-imgs/app-landing-page.png"

export const projecstList = [
    {
        id: 1,
        projectName: "Dummy-Shop",
        emoji: " 🛍️",
        imageURL: dummyShopImg,
        codeURL: "https://github.com/Czzped/dummy-shop",
        deployURL: "https://dummy-shop-tau.vercel.app",
        description: "Este foi um ecommerce que eu desenvolvi utilizando a API de pagamento do Stripe, feito apartir de uma loja ficticía com mecanismos de busca, navegação e carrinho.",
        techs: ["React", "Tailwind"],
        position: "right"
    },
    {
        id: 2,
        projectName: "Pomodoro-Timer",
        emoji: " ⏲️",
        imageURL: pomodoroTimerImg,
        codeURL: "https://github.com/Czzped/Pomodoro-Timer",
        deployURL: "https://pomodoro-timer-dgvu.vercel.app",
        description: "Este foi um projeto que desenvolvi com o intuito de testar a minha lógica de programação, nele crie um cronometro que que faz o armazenamento das vezes que ele foi utilizado fazendo comparações da data em relação ao momento atual.",
        techs: ["React", "Tailwind"],
        position: "left"
    },
    {
        id: 3,
        projectName: "My-Todo-List",
        emoji: " ✍",
        imageURL: myTodoListImg,
        codeURL: "https://github.com/Czzped/my-todo-list",
        deployURL: "https://my-todo-list-virid.vercel.app",
        description: "Este foi um projeto que desenvolvi para que os usuarios consigam organizar e facilitar suas atividades diarias, nele se pode controlar suas tarefas a serem feitas de uma maneira muito mais divertida e fácil.",
        techs: ["React", "SCSS"],
        position: "right"
    },
    {
        id: 4,
        projectName: "App-Landing-Page",
        emoji: " 📱",
        imageURL: appLandingPageImg,
        codeURL: "https://github.com/Czzped/App-Landing-Page",
        deployURL: "https://app-landing-page-brown.vercel.app/",
        description: "Este foi um projeto a qual eu desenvolvi uma Landing Page com o intuito de melhorar minhas habilidades de estilização, nele eu criei uma loja ficticía que faz a apresenção de um app, mostrando seus usuários e seu CEO.",
        techs: ["HTML", "JS", "SCSS"],
        position: "left"
    },
]