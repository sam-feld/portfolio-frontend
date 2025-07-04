import { useState } from 'react'
import styles from './ImagePreviewTool.module.css'
import { formatImageUrl } from '../../utils/utils'

export interface ImagePreviewToolProps {
    imageUrls: string[]
}

export default function ImagePreviewTool(props: ImagePreviewToolProps) {
    const [selectedImage, setSelectedImage] = useState(0)

    function createThumbnails() {
        return props.imageUrls.map((image, index) => {
            const thumbnailClass = selectedImage === index ? `${styles['image-thumbnail']} ${styles['image-thumbnail-selected']}` : styles['image-thumbnail']
            return (
                <img key={`${image}-${index}`} src={formatImageUrl(image)} className={thumbnailClass} onMouseEnter={() => { setSelectedImage(index) }}/>
            )
        })
    }

    return (
        <div className={styles['image-preview-container']}>
            <div className={styles['image-thumbnail-container']}>
                { createThumbnails() }
            </div>
            <img className={styles.image} src={formatImageUrl(props.imageUrls[selectedImage])} />
        </div>
    )
    
}