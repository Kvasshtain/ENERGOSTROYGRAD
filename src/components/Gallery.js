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
            maxImagesCount = imagesArray.length - 1;

        let currentImageIndex = this.state.bigImageIndex - 1;

        if (currentImageIndex == -1)
            currentImageIndex = maxImagesCount - 1;

        this.setState(
            {
                bigImageIndex: currentImageIndex
            }
        )
    }

    bigImageGoNext = () => {
        const { imagesArray } = this.props,
              maxImagesCount = imagesArray.length - 1;

        let currentImageIndex = this.state.bigImageIndex + 1;

        if (currentImageIndex == maxImagesCount)
            currentImageIndex = 0;

        this.setState(
            {
                bigImageIndex: currentImageIndex
            }
        )
    }

    renderImagesTable = () => {
        const { imagesArray } = this.props,
              imageClick = this.imageClick

        if(imagesArray.length) {
            return imagesArray.map(function (item, i) {
                return (
                    <ImageContainer
                        imageIndex = {i}
                        id = {item.id}
                        image = {item.image}
                        onClick = {imageClick}
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
        const { imagesArray } = this.props,
              bigImageIndex = this.state.bigImageIndex

        if (bigImageIndex !== null) {
            return (
                <BigImageContainer
                    onCloseReview = {this.bigImageCloseClick}
                    onGoPrevious = {this.bigImageGoPrevious}
                    onGoNext = {this.bigImageGoNext}
                    image = {imagesArray[bigImageIndex].image}/>
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