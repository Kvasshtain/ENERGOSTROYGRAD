import React from 'react'
import { Gallery } from './Gallery'
const images = require.context('../data/images/', true, /\.jpg$/)
const imagesArray = images.keys()
    .map(key => {
        return {
            id: key,
            image: images(key)
        }
    })

class OurWorks extends React.Component {

    render() {

        return (
            <div className="PageContent">
                <Gallery imagesArray = {imagesArray}/>
            </div>
        )
    }
}

export { OurWorks }