import { Link } from 'react-router-dom'
import { Tag } from '../../utils/types'
import styles from './ProjectCard.module.css'

export interface ProductCardProps {
    id: number
    name: string
    description: string
    tags: Tag[]
    coverImage: string
    images: string[]
    github: string[]
}

export default function ProjectCard(props: ProductCardProps) {
    return (
        <div className={styles['product-container']}>
            <div className={styles['product-image-container']}>
                <Link to={`/project/${props.id}`}>
                    <img className={styles['product-image']} src={props.coverImage} alt={props.name} />
                </Link>
            </div>
            <Link className={styles['product-link']} to={`/project/${props.id}`}>
                <h2 className={styles['product-title']}>{props.name}</h2>
            </Link>
        </div>
    )
}