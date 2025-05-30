import { motion, AnimatePresence } from "framer-motion"
import me from "@/assets/me.jpeg"
import ProjectsCarousel from "@/app/components/ProjectsCarousel.tsx"

import {projects, yourDescription, yourIntroduction} from "@/CONSTS.ts";

function Home() {
    return (
        <div className="relative min-h-screen">
            <AnimatePresence>
                    <motion.div
                        key="content"
                        className="grid grid-cols-1 items-center h-full lg:grid-cols-2 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProjectsCarousel
                            projects={projects}
                        />
                        <div className="flex flex-col gap-6 row-start-1 lg:row-auto items-center justify-center p-4">
                            <img
                                alt={`Photo of the author`}
                                src={me}
                                className="w-48 h-48 rounded-full object-cover shadow-lg"
                            />
                            <div className="text-lg text-muted-foreground max-w-xl leading-relaxed space-y-4">
                                <p className="font-[700] text-[20px]">
                                    {yourIntroduction}
                                </p>
                                <p>
                                    {yourDescription}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )
            </AnimatePresence>
        </div>
    )
}

export default Home
