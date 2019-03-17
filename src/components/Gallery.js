import React from 'react'
import PropTypes from 'prop-types'
import textStrings from '../data/textStrings.json'
import { ImageContainer } from './ImageContainer'
import { BigImageContainer } from './BigImageContainer'

class Gallery extends React.Component {

    state = {
        bigImageIndex : null
    }

    imageClick = (imageIndex) => {
        this.setState(
            {
                bigImageIndex: imageIndex
            }
        )
    }

    bigImageCloseClick = () => {
        this.setState(
            {
                bigImageIndex: null
            }
        )
    }

    bigImageGoPrevious = () => {

        const { imagesArray } = this.props,
            maxImagesCount = imagesArray.length;

        let currentImageIndex = this.state.bigImageIndex - 1;

        if (currentImageIndex === -1)
            currentImageIndex = maxImagesCount - 1;

        this.setState(
            {
                bigImageIndex: currentImageIndex
            }
        )
    }

    bigImageGoNext = () => {
        const { imagesArray } = this.props,
              maxImagesCount = imagesArray.length;

        let currentImageIndex = this.state.bigImageIndex + 1;

        if (currentImageIndex === maxImagesCount)
            currentImageIndex = 0;

        this.setState(
            {
                bigImageIndex: currentImageIndex
            }
        )
    }

    renderImagesTable = () => {
        const { imagesArray } = this.props,
              { imagesDescriptions } = this.props,
              imageClick = this.imageClick

        if(imagesArray.length) {
            return imagesArray.map(function (item, i) {
                return (
                    <ImageContainer
                        key = {i}
                        imageIndex = {i}
                        id = {item.id}
                        image = {item.image}
                        onClick = {imageClick}
                        imageDescription = {imagesDescriptions[i]}
                    />
                )
            })
        }
        else {
            return (
                <p>{textStrings.noPhoto}</p>
            )
        }
    }

    renderBigImage = () => {
        const bigImageIndex = this.state.bigImageIndex,
              bigImageDir = this.props.bigImageDir

        if (bigImageIndex !== null) {
            return (
                <BigImageContainer
                    onCloseReview = {this.bigImageCloseClick}
                    onGoPrevious = {this.bigImageGoPrevious}
                    onGoNext = {this.bigImageGoNext}
                    imageIndex = {bigImageIndex}
                    bigImageDir = {bigImageDir}/>
            )
        }
    }

    render() {

        return (
            <React.Fragment>
            <div className = "Gallery">
                { this.renderImagesTable() }
                { this.renderBigImage() }
            </div>
            </React.Fragment>
        )
    }
}

Gallery.propTypes = {
    imagesArray: PropTypes.array.isRequired
}

export { Gallery }