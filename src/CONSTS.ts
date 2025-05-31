import kimi from "@/assets/kimi.mp4"
import iccg from "@/assets/iccg.mp4"
import qoonvo from "@/assets/qoonvo.mp4"
import routinefy from "@/assets/routinefy.mp4"
import comunidadeEmRede from "@/assets/comunidadeEmRede.mp4"
import moura from "@/assets/moura.mp4"
import type { Tech } from "./app/layout/Header";

export const projects = [
    {
        id: 0,
        techs: ["c++", "gtest", "llvm", "clang", "cmake"],
        title: "Linguagem de Programação",
        status: "In Progress",
        description: "Uma linguagem de programação experimental com parser, interpretador e compilador próprios utilizando C++ e LLVM.",
        openSource: "not yet",
        video: kimi,
        href: "https://github.com/GioLimat",
        knowledgeGained: "Aprofundei meus conhecimentos em design de compiladores, técnicas de parsing e geração de código usando LLVM.",
    },
    {
        id: 1,
        techs: ["react", "javascript", "react-router", "tailwindcss", "vite", "django", "python"],
        title: "MaxLimp",
        status: "Done",
        description: "Uma vitrine virtual para produtos de limpeza, combinando frontend moderno em React com backend robusto em Django.",
        openSource: "yes",
        video: "",
        href: "https://github.com/davidbalzarini/maxlimp",
        knowledgeGained: "Aprofundei habilidades em desenvolvimento full-stack, integrações RESTful e criação de funcionalidades específicas para e-commerce.",
    },
    {
        id: 2,
        techs: ["android", "kotlin", "jetpack compose", "coroutines", "roomDB", "viewModel", "hilt", "compose-charts"],
        title: "Routinefy",
        status: "In Progress",
        description: "Aplicativo para rastreamento de hábitos e tarefas, com notificações, gráficos e persistência local no Android.",
        openSource: "not yet",
        video: routinefy,
        href: "https://github.com/GioLimat",
        knowledgeGained: "Ganhei experiência com arquitetura moderna Android, Jetpack Compose, injeção de dependência com Hilt e persistência com Room.",
    },
    {
        id: 3,
        techs: ["react", "nextjs", "javascript", "tailwindcss"],
        title: "ICCG Website",
        status: "In Progress",
        description: "Website institucional responsivo da ICCG, utilizando SSR com Next.js e estilização com TailwindCSS.",
        openSource: "no",
        video: iccg,
        href: "http://212.85.10.76:3000/",
        knowledgeGained: "Aprendi sobre renderização do lado do servidor, roteamento dinâmico e boas práticas em design web moderno.",
    },
    {
        id: 4,
        techs: ["react", "motion", "framer-motion", "tailwindcss", "react-router", "vite", "django", "python"],
        title: "Moura & Lima Website",
        status: "Done",
        description: "Site interativo para o escritório Moura & Lima com painel para clientes, com animações suaves usando Framer Motion.",
        openSource: "no",
        video: moura,
        href: "https://mouralima.com.br/",
        knowledgeGained: "Aprimorei habilidades com animações, transições no React e integração com backend em Django.",
    },
    {
        id: 5,
        techs: ["spring boot", "kotlin", "android", "jetpack compose", "coroutines", "roomDB", "viewModel", "hilt"],
        title: "qoonvo",
        status: "In Progress",
        description: "Aplicativo para rastreamento de hábitos e tarefas, com notificações, gráficos e persistência local no Android.",
        openSource: "not yet",
        video: qoonvo,
        href: "https://github.com/GioLimat",
        knowledgeGained: "Desenvolvi habilidades em integração frontend-backend, injeção de dependência e arquitetura limpa no Android.",
    },
    {
        id: 6,
        techs: ["c++", "c", "gtest", "cmake"],
        title: "zerstats",
        status: "In Progress",
        description: "Ferramenta de documentação de código fonte com geração de gráficos e relatórios automatizados.",
        openSource: "not yet",
        video: "",
        href: "https://github.com/GioLimat",
        knowledgeGained: "Aprofundei conhecimentos em engenharia de software, testes automatizados e manipulação de código-fonte com C/C++.",
    },
    {
        id: 7,
        techs: ["react", "typescript", "shadcn", "tailwindcss", "react-router", "vite", "spring boot", "java", "kotlin"],
        title: "Comunidade em Rede",
        status: "In Progress",
        description: "Plataforma para intermediação entre usuários e estabelecimentos, com backend robusto e frontend em React.",
        openSource: "no",
        video: comunidadeEmRede,
        href: "https://github.com/GioLimat",
        knowledgeGained: "Aprofundei conhecimentos em integração full-stack, uso de tipagem estática com TypeScript, estilização com TailwindCSS e desenvolvimento de APIs RESTful com Spring Boot.",
    }
];



export const filterRoutes = new Map<string, string>([
    ["#/c", "C"],
    ["#/c-plus-plus", "C++"],
    ["#/java", "Java"],
    ["#/kotlin", "Kotlin"],
    ["#/javascript", "JavaScript"],
    ["#/typescript", "TypeScript"],
    ["#/spring-boot", "Spring Boot"],
    ["#/react", "React"],
    ["#/android", "Android"],
    ["#/jetpack-compose", "Jetpack Compose"],
    ["#/nestjs", "NestJS"],
    ["#/nextjs", "Nextjs"],
]);

export const programmingLanguages: Tech[] = [
    {
        title: "C",
        href: "#/c",
        description: "Base sólida em lógica e estruturas de baixo nível.",
        iconClass: "devicon-c-plain colored",
        color: "#1e3a8a",
    },
    {
        title: "C++",
        href: "#/c-plus-plus",
        description: "POO e desenvolvimento de sistemas.",
        iconClass: "devicon-cplusplus-plain colored",
        color: "#6b21a8",
    },
    {
        title: "Java",
        href: "#/java",
        description: "Backend e Android com boas práticas OOP.",
        iconClass: "devicon-java-plain colored",
        color: "#b91c1c",
    },
    {
        title: "Kotlin",
        href: "#/kotlin",
        description: "Apps Android modernos com coroutines.",
        iconClass: "devicon-kotlin-plain colored",
        color: "#db2777",
    },
    {
        title: "JavaScript",
        href: "#/javascript",
        description: "Interfaces web dinâmicas e interativas.",
        iconClass: "devicon-javascript-plain colored",
        color: "#facc15",
    },
    {
        title: "TypeScript",
        href: "#/typescript",
        description: "Frontends robustos com tipagem estática.",
        iconClass: "devicon-typescript-plain colored",
        color: "#2563eb",
    },
]

export const frameworksTechs: Tech[] = [
    {
        title: "Spring Boot",
        href: "#/spring-boot",
        description: "APIs backend robustas em Java.",
        iconClass: "devicon-spring-plain colored",
        color: "#6f3e18",
    },
    {
        title: "React",
        href: "#/react",
        description: "Biblioteca para UIs web.",
        iconClass: "devicon-react-original colored",
        color: "#61dafb",
    },
    {
        title: "Android",
        href: "#/android",
        description: "Apps nativos para Android.",
        iconClass: "devicon-android-plain colored",
        color: "#3ddc84",
    },
    {
        title: "Jetpack Compose",
        href: "#/jetpack-compose",
        description: "UI declarativa para Android.",
        iconClass: "devicon-kotlin-plain colored",
        color: "#0184bc",
    },
    {
        title: "NestJS",
        href: "#/nestjs",
        description: "Framework backend em Node.js.",
        iconClass: "devicon-nestjs-plain colored",
        color: "#e0234e",
    },
    {
        title: "Next.js",
        href: "#/nextjs",
        description: "SSR e SSG com React.",
        iconClass: "devicon-nextjs-plain colored",
        color: "#000000",
    },
]

export const curriculo = "https://keen-gaufre-733f26.netlify.app/"
export const yourIntroduction = `Sérgio Machado de Lima Filho, 19 anos, curso Análise e Desenvolvimento de Sistemas na FAETERJ Rio (3° período) e sou voluntário no Instituto Carioca de Cão Guia.`
export const yourDescription =  `Programo há mais de 2 anos, focado principalmente em Android e C++.
                                    Também tenho experiência sólida com React, Spring Boot, Java,
                                    TypeScript, Next.js e NestJS. Busco sempre aprimorar minhas habilidades e entregar soluções eficientes.`