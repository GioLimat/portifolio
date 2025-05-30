import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { Project } from "./ProjectsCarousel"
import Tags from "@/app/components/Tags.tsx";
import {ChevronRight} from "lucide-react";

interface ProjectModalProps {
    project: Project | null
    onClose: () => void
}


export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    key="modal"
                    className={`w-full bg-background/95 p-2 lg:p-6 flex flex-col items-center justify-center gap-6 ${project.video ? "" : "my-auto"} \`}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {project.video && (
                        <motion.video
                            className="w-full  rounded-md"
                            autoPlay
                            muted
                            loop
                            playsInline
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </motion.video>
                    )}

                    <motion.div
                        className="bg-card w-full rounded-xl p-2 lg:p-6 shadow-xl flex flex-col gap-4"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <Button onClick={onClose} variant="outline" size="sm">
                                Voltar
                            </Button>
                        </div>

                        <div className="flex items-start flex-col md:flex-row  md:items-center gap-3">
                            <div className="flex items-center gap-1">
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
                            <div className="flex items-center gap-1">
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

                        <div>
                            <p className="text-muted-foreground text-sm tracking-widest mb-1">Descrição:</p>
                            <p className="text-lg tracking-wide">{project.description}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground text-sm tracking-widest mb-1">Conhecimento adiquirido:</p>
                            <p className="text-sm tracking-wider">{project.knowledgeGained}</p>
                        </div>

                        <Tags tags={project.techs} />
                        <Button  className="flex border-b-[1px] mt-2 rounded-none w-min border-b-primary gap-3 transition-all duration-300 hover:gap-4 items-center justify-start" variant="ghost" onClick={(e) => {
                        e.preventDefault();
                        window.open(project.href, '_blank');
                    }}>
                        Saiba Mais <ChevronRight/>
                    </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
