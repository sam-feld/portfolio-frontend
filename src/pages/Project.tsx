import { useNavigate, useParams } from 'react-router-dom'
import styles from './Project.module.css'
import type { Project } from '../utils/types'
import { useEffect, useState } from 'react'
import { getProjectById } from '../utils/api'
import LoadingSpinner from '../components/loading-spinner/LoadingSpinner'
import { wait } from '../utils/utils'
import ImagePreviewTool from '../components/image-preview-tool/ImagePreviewTool'
import NavBar from '../components//navbar/NavBar'

export default function Project() {
    const idParam = useParams().id!
    const id = parseInt(idParam, 10);
    const navigate = useNavigate()

    const [product, setProduct] = useState<Project | null>(null)

    async function loadProduct() {
        try {
            const productApiData = await getProjectById(id)
            await wait(500) // purposefully delay loading for 500ms (one half of a second) so user can see the loading spinner
            setProduct(productApiData)
            document.title = productApiData.name
        }
        catch(err) {
            navigate('/')
        }
    }

    useEffect(() => {
        loadProduct()
    }, [])


    if (!product) {
        return(
            <LoadingSpinner />
        )
    }

    return (

        <div className={`${styles.flex} ${styles['outer-container']}`}>
            <NavBar />

            <div className={styles['inner-container']}>
                <div className={styles['main-container']}>
                    <div className={styles['img-container']}>
                        <ImagePreviewTool imageUrls={product.images} />
                    </div> 
                    <div className={styles['product-info-container']}>
                        <h1 className={styles.title}>{product.name}</h1>
                        <p>{product.description}</p>
                        <div className={styles.github}>
                            <img className={styles['github-logo']} src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="GitHub Logo" />
                            <a href={product.github[0]} target="_blank" rel="noopener noreferrer">
                                {product.github[0]}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}