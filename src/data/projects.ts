
import { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "estrutura",
    title: "Estrutura - Construction Company Website",
    description: "A modern website for a construction company with project showcase and service information.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80",
    date: "August 2022",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    link: "https://estrutura-demo.com"
  },
  {
    id: "prudentlife",
    title: "PrudentLife - Insurance Company Website",
    description: "A website for an insurance company with quote calculator and policy management tools.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    date: "October 2022",
    category: "Web Development",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://prudentlife-demo.com"
  },
  {
    id: "eliteguard",
    title: "EliteGuard - Law Firm Website",
    description: "A professional website for a law firm with case studies and consultation booking.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "December 2022",
    category: "Web Development",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    link: "https://eliteguard-demo.com"
  },
  {
    id: "moovin",
    title: "Moovin - Moving Company Website",
    description: "A responsive website for a moving company with booking system and cost calculator.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "February 2023",
    category: "Web Development",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://moovin-demo.com"
  }
];

export default projects;
