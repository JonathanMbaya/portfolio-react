const logotext = "JONATHAN MBAYA";
const meta = {
    title: "Jonathan MBAYA",
    description: "Je suis Jonathan MBAYA , développeur Web FullStack & Ingénieur Big Data , actuellement à Paris , France",
};

const introdata = {
    title: "Je m'appelle Jonathan Mbaya",
    animated: {
        first: "Développeur Web & Big Data",
        second: "Je développe des applications cool !",
        third: "J'aime coder",
    },
    description: "Développeur FullStack & Big Data, depuis maintenant plus de 3 ans",
    your_img_url: "https://static.vecteezy.com/ti/vecteur-libre/p3/5445998-personne-developpant-un-site-web-glyphe-illustration-de-developpeur-web-vectoriel.jpg",
};

const dataabout = {
    title: "A propos",
    aboutme: "Je m'appelle Jonathan Mbaya , développeur web et Big Data sur Paris. Mais compétences m'ont permis de coder plusieurs projet de formation et pour des entreprises diverses (Site internet , application mobile et logiciels d'entreprises. J'interviens aussi bien en conception design et en gestion de projet qu'en développement sous plusieurs langages informatique ",
};
const worktimeline = [{
        jobtitle: "Chef de Projet / Webmaster",
        where: "CCI France",
        date: "2020 - 2021",
    },
    {
        jobtitle: "Développeur FullStack",
        where: "Ecran Bleu XV",
        date: "2021-2023",
    }
];

const skills = [{
        name: "PHP",
        value: 90,
    },
    {
        name: "HTML5",
        value: 100,
    },
    {
        name: "CSS / SCSS",
        value: 90,
    },
    {
        name: "Javascript",
        value: 85,
    },
    {
        name: "MySQL",
        value: 60,
    },
    {
        name: "React / React Native",
        value: 80,
    },
    {
        name: "Vue",
        value: 60,
    },
    {
        name: "Laravel",
        value: 75,
    },
    {
        name: "Symphony",
        value: 40,
    },
    {
        name: "Angular",
        value: 40,
    },
    {
        name: "Docker -> Laradock",
        value: 65,
    },
];

const services = [    {
        title: "Management de projet",
        description: "Gestion de projet et d'équipe , organisation de travail en Agile (SCRUM , KANBAN, ...)",
    },
    {
        title: "UI & UX Design",
        description: "Connaissance en Webdesign UX (Parcours utilisateurs,...) sur des outils UI comme : PhotoShop, Illustrator, Figma et Adobe XD",
    },
    {
        title: "Mobile Apps",
        description: "Développement d'application mobile, Application Progressive et reponsive design adapté à tous les écrans",
    },
    {
        title: "Wordpress Design",
        description: "Maitrise de création de thème Wordpress personnalisé et développement à base de template",
    }
];

// Données de Portfolio en préparation

const dataportfolio = [{
        img: process.env.PUBLIC_URL + '/cci-france.png',
        description: "Chambre de Commerce et de l'Industrie pour les Nuits de l'orientation avec implantation d'un ChatBot by Hello Charly. (ElasticSearch, CMS Drupal)",
        link: "https://www.cci.fr/ressources/orientation-professionnelle",
    },
    {
        img: process.env.PUBLIC_URL + '/Hathyre.png',
        description: "[EN COURS] - Projet E-Commerce , boutique officiel Hathyre en production. (React JS , Node JS , Mongo DB , Stripe) ",
        link: "https://hathyre-web.onrender.com/",
    },
    {
        img: process.env.PUBLIC_URL + '/ecranbleu.png',
        description: "Design et refonte de site Ecran Bleu XV. (PHP)",
        link: "https://volt380.com",
    },
    {
        img: process.env.PUBLIC_URL + '/tic-tac.png',
        description: "Jeu Tic-tac-Toe - Qui arrivera à aligner son triplé ? (Python, Flask)",
        link: "https://game-tictactoe.onrender.com/",
    }
];

const contactConfig = {
    YOUR_EMAIL: "jonathanmbaya13@gmail.com",
    YOUR_FONE: "+33 7 62 61 65 52",
    description: " ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_3p6bcz6",
    YOUR_TEMPLATE_ID: "template_iahzi4c",
    YOUR_USER_ID: "dk0eLJXrdMgPno2rZ",
};

const socialprofils = {
    github: "https://github.com/JonathanMbaya",
    linkedin: "https://www.linkedin.com/in/jonathan-st%C3%A9phane-mbaya-a97423176/",
    twitter: "https://twitter.com/nate_4reall",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};