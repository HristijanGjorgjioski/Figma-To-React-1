import React from 'react'

import { slack, google, dropbox, atlassian, shopify } from './imports'
import './brand.css'

const Image = ({ src, alt }) => {
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
}

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <Image src={google} alt="google" />
            <Image src={slack} alt="slack" />
            <Image src={dropbox} alt="dropbox" />
            <Image src={atlassian} alt="atlassian" />
            <Image src={shopify} alt="shopify" />
        </div>
    )
}

export default Brand
