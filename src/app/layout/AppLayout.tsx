import Header from "@/app/layout/Header.tsx";
import Router from "@/app/Router.tsx";
import {useEffect, useState} from "react";
import {frameworksTechs, programmingLanguages} from "@/CONSTS.ts";

function AppLayout() {

    const [route, setRoute] = useState<string>(() => window.location.hash || "#/")

    useEffect(() => {
        const onHashChange = () => setRoute(window.location.hash || "#/")
        window.addEventListener("hashchange", onHashChange)
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.style.setProperty("--bg-highlight", "oklch(0.141 0.005 285.823)")
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.setProperty("--bg-highlight", "oklch(1 0 0)")
        }
        const isFilterRoute = programmingLanguages.find(tech=>tech.href === route) || frameworksTechs.find(tech=>tech.href === route);
        if (isFilterRoute) {
            document.documentElement.style.setProperty("--bg-highlight", isFilterRoute.color)
        }
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])


    return (
        <div>
            <Header/>
            <Router route={route} />
        </div>
    );
}

export default AppLayout;