import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react'
import styles from './ProjectDisplay.module.css'
import { Project, Tag } from '../../utils/types'
import { getProjects } from '../../utils/api'
import ProjectCard from '../project-card/ProjectCard'
import FilterButtonCard from '../filter-button-card/FilterButtonCard'

export default function ProjectDisplay() {

    const all: Tag = { id: 0, name: "All",};

    const [projects, setProjects] = useState([] as Project[])
    const [buttonType, setButtonType] = useState<"category" | "tech">("tech");
    const [buttons, changeButtons] = useState([] as Tag[])
    const [selectedButton, changeSelection] = useState<Tag>(all)

    const scrollRef = useRef<HTMLDivElement>(null);
    function resetScroll() {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 0;
        }
        // scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    }

    async function loadProjects() {
        const projectApiData = await getProjects()
        setProjects(projectApiData)
    }

    useEffect(() => {
        loadProjects()
        setTechButtons()
    }, [])

    function handleCategoryClick() {
        setButtonType("category");
        setCategoryButtons();
        changeSelection(all)
        resetScroll()
    }
    
    function handleTechClick() {
        setButtonType("tech");
        setTechButtons();
        changeSelection(all)
        resetScroll()
    }

      
    function handleSelect() {
    if (buttonType === "tech") {
        handleCategoryClick()
    } else {
        handleTechClick()
    }
    }
      
      
    function filterBy(tag: Tag){
        changeSelection(tag)
      }

    
      function setCategoryButtons() { 
        changeButtons([
            { id: 0, name: "All" },
            { id: 12, name: "Games" },
            { id: 5, name: "Graphics" },
            { id: 1, name: "Full Stack" },
            { id: 6, name: "AI" },
            { id: 9, name: "Algorithms" },
        ]);
    }

    function setTechButtons() {     
        changeButtons([
            { id: 0, name: "All" },
            { id: 4, name: "React" },
            { id: 2, name: "TypeScript" },
            { id: 102, name: "Python" },
            { id: 107, name: "Java" },
            { id: 104, name: "Swift" },
            { id: 105, name: "Express" },
            { id: 106, name: "Node.js" }
        ]);
    }

    function createButtons(){
        return buttons.map((button, index) => {
            return (
                <motion.div
                    key={`${button.id}-${buttonType}`}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                >

                    <FilterButtonCard 
                        key={button.id}
                        id={button.id}
                        name={button.name}
                        isActive={button.id === selectedButton.id}
                        onClick={() => filterBy(button)} 
                    />
                
                </motion.div>
            )
        })
    }

    function createProjectCards() {
        return projects
          .filter(project =>
            selectedButton.id === 0 ||  // Show all projects if "All" is selected
            project.tags.some(tag => tag.id === selectedButton.id) // Match specific tag
          )
          .map(project => (
            <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            tags={project.tags}
            coverImage={project.coverImage}
            images={project.images}
            github={project.github}
            />
          ));
      }


      return (
        <div className={styles['project-display']}>
          <div className={styles['header']}>
            <p className={styles['projects-title']}>Projects</p>
      
            <div className={styles.filter}>

                <div className={styles.dropdownContainer}>
                    <div className={styles.dropdownWrapper} data-flip={buttonType === "category" ? "true" : "false"} >
                            <div className={`${styles.dropdownSelected} ${styles.light}`} >
                            {buttonType === "tech" ? "Tech Used" : "Project Type"}
                            </div>
            
                            <div className={`${styles.dropdownOption} ${styles.dark}`} onClick={handleSelect}>
                                {buttonType === "tech" ? "Project Type" : "Tech Used"}
                            </div>
                            
                    </div>
                </div>
                
                <div ref={scrollRef}className={styles['filter-button-list']}>
                    {createButtons()}
                </div>
            
            </div>

          </div>
      
          <div className={styles['project-list']}>
            {createProjectCards()}
          </div>
        </div>
      );
      
}