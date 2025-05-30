import ProjectsCarousel from "@/app/components/ProjectsCarousel.tsx";

import {projects} from "@/CONSTS.ts";

function Projects() {
    return (
       <ProjectsCarousel projects={projects} length={2} />
    );
}

export default Projects;