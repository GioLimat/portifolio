import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {curriculo, frameworksTechs, programmingLanguages} from "@/CONSTS.ts";
import {ChevronDown, Columns2, X} from "lucide-react";
import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";
import {Button} from "@/components/ui/button.tsx";

export type Tech = {
    title: string
    href: string
    description: string
    iconClass: string
    color: string
}


function SidebarItem({name, children, onClick}: {name: string, children?: React.ReactNode, onClick?: () => void}) {
    return <Button variant="ghost" onClick={onClick} className="relative hover:bg-muted-foreground flex items-center gap-3 justify-start">
        {name}
        {children}
    </Button>
}

function AnimatedSubItems({items, selectedNav, label}: {items: Tech[], selectedNav: string, label: string}) {
    const submenuVariants = {
        closed: { scaleY: 0, opacity: 0, transition: { duration: 0.2 } },
        open:   { scaleY: 1, opacity: 1, transition: { duration: 0.2 } },
    };

    return  <AnimatePresence>
        {selectedNav === label && (
            <motion.div
                key={label}
                className="ml-6 flex flex-col gap-2 justify-start items-start origin-top overflow-hidden"
                variants={submenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
            >
                {items.map(lang => (
                    <Button
                        key={lang.title}
                        className="w-full flex justify-start"
                        variant="secondary"
                        onClick={
                            ()=>{
                                window.location.hash = lang.href;
                            }
                        }
                    >
                        {lang.iconClass && (
                            <i className={cn(lang.iconClass, "text-lg")} />
                        )}
                        {lang.title}
                    </Button>
                ))}
            </motion.div>
        )}
    </AnimatePresence>
}

function AppSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNav, setSelectedNav] = useState("");

    const dividerVariants = {
        closed: { opacity: 0, height: 0 },
        open:   { opacity: 0.4, height: "100%" },
    };

    const sidebarVariants = {
        closed: { right: "-200%" },
        open:   { right: 0 },
    };

    useEffect(() => {
        const body = document.body;
        // @ts-ignore
        const fn = (e) => {
            if (e.target instanceof HTMLElement && !e.target.closest("#sidebar")) {
                setIsOpen(false);
            }
        }
        body.addEventListener("click", fn)
        return () => {body.removeEventListener("click", fn)}
    }, []);



    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(v => !v)}
                className="cursor-pointer block lg:hidden"
            >
                <Columns2 />
            </button>

            <AnimatePresence >
                {isOpen && (
                    <>
                    <motion.aside
                        id="sidebar"
                        className="fixed inset-y-0 right-0 h-full z-40 border-l-[1px] border-l-primary-op  w-80 bg-background py-4 px-7 lg:hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        transition={{ type: "tween", duration: 0.25 }}
                    >
                        <Button
                            variant="ghost"
                            className="absolute z-[99] top-4 right-4"
                            onClick={() => setIsOpen(false)}
                            >
                            <X />
                        </Button>
                        <div className="relative">
                            <motion.div
                                className="absolute left-0 w-[1px] bg-[var(--primary-op)]"
                                variants={dividerVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{ duration: 0.25 }}
                            />

                            <SidebarItem
                                onClick={() =>
                                    setSelectedNav(s =>
                                        s === "languages" ? "" : "languages"
                                    )
                                }
                                name="Linguagens de Programação"
                            >
                                <ChevronDown
                                    className={`duration-300 transition-all ${
                                        selectedNav === "languages" && "rotate-180"
                                    }`}
                                />
                            </SidebarItem>

                            <AnimatedSubItems items={programmingLanguages} selectedNav={selectedNav} label="languages" />
                        </div>

                        <div className="relative">
                            <motion.div
                                className="absolute left-0 w-[1px] bg-[var(--primary-op)]"
                                variants={dividerVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{ duration: 0.25 }}
                            />

                            <SidebarItem
                                onClick={() =>
                                    setSelectedNav(s =>
                                        s === "frameworks" ? "" : "frameworks"
                                    )
                                }
                                name="Frameworks &amp; Techs"
                            >
                                <ChevronDown
                                    className={`duration-300 transition-all ${
                                        selectedNav === "frameworks" && "rotate-180"
                                    }`}
                                />
                            </SidebarItem>

                            <AnimatedSubItems items={frameworksTechs} selectedNav={selectedNav} label={"frameworks"} />
                        </div>

                        <SidebarItem name="Projetos" onClick={() => {
                            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                            if (isDarkMode) {
                                document.documentElement.style.setProperty("--bg-highlight", "oklch(0.141 0.005 285.823)")
                            } else {
                                document.documentElement.style.setProperty("--bg-highlight", "oklch(1 0 0)")
                            }
                            window.location.hash = "#/projects";
                        } }/>

                        <SidebarItem onClick={()=>{
                            window.open(curriculo, '_blank');
                        }} name="Currículo"/>

                    </motion.aside></>
                )}
            </AnimatePresence>
        </>
    );
}


export default function Header() {
    const setBgHighlight = (color: string) => {
        document.documentElement.style.setProperty("--bg-highlight", color)
    }

    return (
        <div className="px-1 md:px-8 lg:px-16 py-4 flex items-center justify-between border-b border-border">
            <a href="#/" onClick={()=>setBgHighlight("var(--background)") } className="font-mono text-xl font-semibold text-primary select-none">
                <span className="text-muted-foreground">function</span>{" "}
                <span className="text-foreground">main</span>
                <span className="text-muted-foreground">();</span>
            </a>
            <AppSidebar/>
            <NavigationMenu className="hidden lg:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Linguagens de Progamação</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-3 p-4 sm:grid-cols-2 md:w-[400px] lg:w-[500px]">
                                {programmingLanguages.map((lang) => (
                                    <ListItem
                                        key={lang.title}
                                        title={lang.title}
                                        icon={lang.iconClass}
                                        href={lang.href}
                                        onClick={() => setBgHighlight(lang.color)}
                                    >
                                        {lang.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Frameworks &amp; Techs</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-3 p-4 sm:grid-cols-2 md:w-[400px] lg:w-[500px]">
                                {frameworksTechs.map((tech) => (
                                    <ListItem
                                        key={tech.title}
                                        title={tech.title}
                                        icon={tech.iconClass}
                                        href={tech.href}
                                        onClick={() => setBgHighlight(tech.color)}
                                    >
                                        {tech.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>

                        <NavigationMenuLink onClick={()=>{
                            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                            if (isDarkMode) {
                                document.documentElement.style.setProperty("--bg-highlight", "oklch(0.141 0.005 285.823)")
                            } else {
                                document.documentElement.style.setProperty("--bg-highlight", "oklch(1 0 0)")
                            }
                        }}  href="#/projects" className={navigationMenuTriggerStyle()}>
                            Projetos
                        </NavigationMenuLink>

                    </NavigationMenuItem>
                    <NavigationMenuItem>

                        <NavigationMenuLink  href={curriculo} className={navigationMenuTriggerStyle()}>
                            Currículo
                        </NavigationMenuLink>

                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & {
    title: string
    icon?: string
    onClick?: () => void
}
>(({ className, title, icon, children, onClick, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    onClick={onClick}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-2 text-sm font-medium">
                        {icon && <i className={cn(icon, "text-lg")} />}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = "ListItem"