import React from 'react'
import { Gallery } from './Gallery'
import pictureDescription from '../data/images/small/pictureDescription'

const images = require.context('../data/images/small', true, /\.jpg$/),
      bigImageDir = '../data/images/big/';

const imagesArray = images.keys()
    .map(key => {
        return {
            id: key,
            image: images(key)
        }
    })

const imagesDescriptions = pictureDescription.strings;

class OurWorks extends React.Component {

    render() {

        return (
            <div className="PageContent">
                <Gallery imagesArray = {imagesArray}
                         bigImageDir = {bigImageDir}
                         imagesDescriptions = {imagesDescriptions}
                />
            </div>
        )
    }
}

export { OurWorks }