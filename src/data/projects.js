import difachat from "../assets/projects/1.png";
import todox from "../assets/projects/todox.png";
import ntucoder from "../assets/projects/ntucode.png";
import portfolio from "../assets/projects/portfolio.png";
export const projects = [
    {
        title: "Personal Portfolio Website",
        description: "Một trang web giới thiệu bản thân và thể hiện ra các kỹ năng đã đúc kết được",
        tech: ["React", "CSS", "JavaScript", "Vite", "TailwindCSS"],
        github: "https://github.com/nguyenduydan/portfolio",
        demo: "https://portfolio-omega-gilt-60.vercel.app/",
        img: portfolio
    },
    {
        title: "DIFA Chat",
        description: "Trang web dùng để giao tiếp với nhau qua các dòng tin nhắn với thời gian thực",
        tech: ["NodeJS", "React", "MongoDB", "SocketIO", "Express", "JWT", "bcryptjs", "Resend", "Cloudinary", "TailwindCSS", "Arcjet", "DaisyUI"],
        github: "https://github.com/nguyenduydan/chat-app",
        demo: "https://chat-app-v6tji.sevalla.app/",
        img: difachat
    },
    {
        title: "TodoX",
        description: "Một website quản lý các công việc cần làm. Nó cũng có phân trang, filter và một vài thứ khác nữa",
        tech: ["Express", "NodeJS", "ReactJS", "Shadcn-ui", "TailwindCSS"],
        github: "https://github.com/nguyenduydan/todoX_app",
        demo: "https://todox-app-fn13.onrender.com/",
        img: todox
    },
    {
        title: "LMS-NTU Coder",
        description: "Một website quản lý và bán các khóa học. Nó cũng cho phép người dùng code trực tiếp ngay tại website (Những chức năng này hiện tịa chỉ chạy ở sandbox)",
        tech: [".NET core", "ReactJS", "ChakraUI", "Minio", "Oauth2", "JWT", "MySQL"],
        github: "https://github.com/nguyenduydan/todoX_app",
        demo: "https://todox-app-fn13.onrender.com/",
        img: ntucoder
    }
];
