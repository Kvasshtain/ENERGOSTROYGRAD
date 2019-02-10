import React from 'react'
import textStrings from '../data/textStrings.json'

class Services extends React.Component {

    render() {
        return (
            <div className = "PageContent">
                <h1>{textStrings.servicesString}</h1>
            </div>
        )
    }
}

export { Services }