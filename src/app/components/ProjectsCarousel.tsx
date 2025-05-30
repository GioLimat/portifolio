import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard";

export type Project = {
    id : number,
    techs: string[]
    title: string
    status: string
    description: string
    openSource: string
    video: string
    href: string
    knowledgeGained: string
}

interface ProjectsCarouselProps {
    projects: Project[]
    length?: number
}

function getBasisClass(length: number) {
    switch (length) {
        case 1: return "basis-full"
        case 2: return "lg:basis-1/2"
        case 3: return "md:basis-1/2 lg:basis-1/3"
        case 4: return "md:basis-1/3 lg:basis-1/4"
        default: return "md:basis-1/3 lg:basis-1/5"
    }
}

export function ProjectsCarousel({ projects, length = 1 }: ProjectsCarouselProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="projects-carousel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <Carousel className="w-full">
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem className={getBasisClass(length)} key={project.title}>
                                <Card
                                    onClick={() => {
                                        window.location.hash = `/${project.title
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`
                                    }}
                                    className={`p-0 lg:p-6`}
                                >
                                    <ProjectCard project={project} />
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="lg:flex hidden"  />
                    <CarouselNext className="lg:flex hidden"  />
                </Carousel>
            </motion.div>
        </AnimatePresence>
    )
}

export default ProjectsCarousel
