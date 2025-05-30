import HomePage from "./pages/Home"
import ProjectPage from "@/app/pages/ProjectPage.tsx";
import Projects from "@/app/pages/Projects.tsx";
import {filterRoutes} from "@/CONSTS.ts";
import FilteredProjects from "@/app/pages/FilteredProjects.tsx";


function Router({route} : {route: string}) {


    return (
        <div className="px-1 md:px-8 lg:px-16 py-6 pt-12 h-full">
            {
                route === "#/" ? <HomePage /> :
                route === "#/projects" ? <Projects/> :
                filterRoutes.has(route) ? <FilteredProjects tech={route}/> : <ProjectPage route={route} />
            }
        </div>
    )
}

export default Router
