
import {projects} from "@/CONSTS.ts";
import ProjectModal from "@/app/components/ProjectModal.tsx";

function ProjectPage({route} : {route: string}) {
    return (
        <div className="relative w-full">
            <ProjectModal project={
                projects.find(p =>
                    p.title.toLowerCase().replace(/\s+/g, "-") === route.slice(2).toLowerCase().replace(/\s+/g, "-"))
                || projects[0]
            } onClose={()=>{   window.history.back();}} />
            </div>
    );
}

export default ProjectPage;