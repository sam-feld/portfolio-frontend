import { useEffect } from 'react'
import styles from './Home.module.css'
import ProjectDisplay from '../components/project-display/ProjectDisplay'
import MoreInfoButton from '../components/more-info-button/MoreInfoButton'
import SkillDisplay from '../components/skill-display/SkillDisplay'

export default function Home() {

    useEffect(() => {
        document.title = "Sam's portfolio"
    }, [])

    return (
        <div className={styles['main-container']}>
            <div className={styles['left-display']}>
                <h1>Sam Feld</h1>
                <p className={styles['job-description']}>Software Engineer</p>
                <MoreInfoButton />
                <SkillDisplay  />
            </div>
            <ProjectDisplay />
        </div>
    )
}