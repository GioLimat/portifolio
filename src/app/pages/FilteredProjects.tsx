import {filterRoutes} from "@/CONSTS.ts";
import ProjectsCarousel from "@/app/components/ProjectsCarousel.tsx";
import {projects} from "@/CONSTS.ts";

function FilteredProjects({tech}: {tech: string}) {
    const selectedTech = filterRoutes.get(tech);
    const filteredProjects = projects.filter((e) => e.techs.some((t) => t.toLowerCase() === selectedTech?.toLowerCase()))
    return (
        <div className="w-full h-full">
            {filteredProjects.length > 0 ?
            <ProjectsCarousel length={2} projects={
                filteredProjects
            }/> :
            <div className="text-center text-lg tracking-wider text-muted-foreground">
                No projects found for {selectedTech}
            </div>
            }
        </div>
    );
}

export default FilteredProjects;