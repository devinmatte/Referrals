import '../styles/main.scss'
import '../styles/brands.scss'

import React from 'react'

type ProductProps = {
    product: string,
    description: string,
    link: string
}

const Product: React.FunctionComponent<ProductProps> = ({ product, description, link }) => {
    const imageWebpSource = "images/products/webp/" + encodeURI(product) + ".webp"
    const imagePngSource = "images/products/png/" + encodeURI(product) + ".png"
    return (
        <article className={product}>
            <picture className={"image"} style={{objectFit: 'cover', minWidth: '300px', minHeight: '300px'}}>
                <source srcSet={imageWebpSource} type={"image/webp"} />
                <source srcSet={imagePngSource} type={"image/png"} />
                <img src={imagePngSource} data-position={"center"} alt={product} />
            </picture>
            <a href={link}>
                <h2>{product}</h2>
                <div className={"content"}>
                    <p>{description}</p>
                </div>
            </a>
        </article>
    );
}

export default Product;