import {CardContent} from "@/components/ui/card.tsx";
import Tags from "@/app/components/Tags.tsx";
import type {Project} from "@/app/components/ProjectsCarousel.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronRight} from "lucide-react";



function ProjectCard({project}: {project: Project} ) {
    return (
        <CardContent className={`cursor-pointer flex flex-col gap-4
                            overflow-auto transition-all
                            duration-300 ease-in-out hover:scale-[1.01]`}>
            {project.video && (
                <video
                    className="w-full  rounded-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            <div className="flex items-start flex-col md:flex-row  md:items-center gap-2 justify-between">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex flex-col items-start   xl:flex-row xl:items-center gap-3 ">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <div
                            className={`rounded-xl px-2 py-1 text-sm font-medium ${
                                project.status === "In Progress"
                                    ? "bg-yellow-500 text-black"
                                    : project.status === "Done"
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-500 text-white"
                            }`}
                        >
                            {project.status === "In Progress" ? "Em Andamento" :
                                project.status === "Done" ? "Concluído" : "Pendente"}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Open Source:</span>
                        <div
                            className={`rounded-xl capitalize px-2 py-1 text-sm font-medium ${
                                project.openSource === "yes"
                                    ? "bg-green-500 text-white"
                                    : project.openSource === "no"
                                        ? "bg-red-500 text-white"
                                        : "bg-yellow-500 text-black"
                            }`}
                        >
                            {project.openSource === "yes" ? "Sim" : project.openSource === "not yet" ? "Ainda não" : "Não"}
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-muted-foreground text-sm tracking-widest">Descrição:</p>
            <p className="text-lg tracking-wide ml-2">{project.description}</p>
            <p className="text-muted-foreground text-sm tracking-widest">Conhecimento adiquirido:</p>
            <p className="text-sm tracking-wider ml-2">{project.knowledgeGained}</p>
            <Tags tags={project.techs} />
            <Button  className="flex border-b-[1px] mt-2 rounded-none w-min border-b-primary gap-3 transition-all duration-300 hover:gap-4 items-center justify-start" variant="ghost" onClick={(e) => {
                e.preventDefault();
                window.open(project.href, '_blank');
            }}>
                Saiba Mais <ChevronRight/>
            </Button>
        </CardContent>
    );
}

export default ProjectCard;