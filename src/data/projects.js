import { difachat, ntucoder, portfolio, todox, weather } from "../assets/projects/slides.js";

export const projects = (t) => [
    {
        title: "Personal Portfolio Website",
        description: t("descriptions.portfolio"),
        tech: ["React", "CSS", "JavaScript", "Vite", "TailwindCSS"],
        github: "https://github.com/nguyenduydan/portfolio",
        demo: "https://portfolio-omega-gilt-60.vercel.app/",
        img: portfolio
    },
    {
        title: "DIFA Chat",
        description: t("descriptions.difachat"),
        tech: ["NodeJS", "React", "MongoDB", "SocketIO", "Express", "JWT", "bcryptjs", "Resend", "Cloudinary", "TailwindCSS", "Arcjet", "DaisyUI"],
        github: "https://github.com/nguyenduydan/chat-app",
        demo: "https://chat-app-v6tji.sevalla.app/",
        img: difachat
    },
    {
        title: "TodoX",
        description: t("descriptions.todox"),
        tech: ["Express", "NodeJS", "ReactJS", "Shadcn-ui", "TailwindCSS"],
        github: "https://github.com/nguyenduydan/todoX_app",
        demo: "https://todox-app-fn13.onrender.com/",
        img: todox
    },
    {
        title: "LMS-NTU Coder",
        description: t("descriptions.ntucoder"),
        tech: [".NET core", "ReactJS", "ChakraUI", "Minio", "Oauth2", "JWT", "MySQL"],
        github: "https://github.com/nguyenduydan/ntucoder",
        demo: "https://ntucoder-nguyenduydans-projects.vercel.app/",
        img: ntucoder
    },
    {
        title: "Weather App",
        description: t("descriptions.weatherapp"),
        tech: ["React", "CSS", "JavaScript", "Vite", "TailwindCSS"],
        github: "https://github.com/nguyenduydan/Weather_App",
        demo: "https://weatherappntu.vercel.app/",
        img: weather
    }
];
