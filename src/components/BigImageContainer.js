import React from 'react'
import textStrings from '../data/textStrings.json'

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
        return (
            <div className = "BigImageContainer">
                <img
                    src = { this.props.image }
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