import React from 'react'

class BigImageContainer extends React.Component {

    onCloseReview = () => {
        this.props.onCloseReview()
    }

    onGoPrevious = () => {
        this.props.onGoPrevious()
    }

    onGoNext = () => {
        this.props.onGoNext()
    }

    render() {
        const //bigImageDir = this.props.bigImageDir,
              imageIndex = this.props.imageIndex
              //imageResolution = '.jpg',
              //image = bigImageDir + imageIndex + imageResolution

        return (
            <div className = "BigImageContainer">
                <img
                    src = {require('../data/images/big/' + imageIndex + '.jpg')}
                    //src = {require(image)} // It doesn't work! https://github.com/webpack/webpack/issues/6680
                    alt="img"
                    onClick = { this.imageClick }
                />
                <div className = "Icon CloseReview" onClick = {this.onCloseReview}></div>
                <div className = "Icon GoPrevious" onClick = {this.onGoPrevious}></div>
                <div className = "Icon GoNext" onClick = {this.onGoNext}></div>
            </div>
        )
    }
}

export { BigImageContainer }