import React from 'react'
import textStrings from '../data/textStrings.json'
import servicesPageContent from '../data/servicesPageContent.json'

class Services extends React.Component {

    renderServicesList = () => {
        return servicesPageContent.services.map(function(item, index) {
            return (
                <li key = {index}>
                    {item}
                </li>
            )
        })
    }

    render() {
        return (
            <div className = "PageContent">
                <h1>{textStrings.servicesString}</h1>
                <div className = "PageBlock">
                    <ul>
                        {this.renderServicesList()}
                    </ul>
                </div>
            </div>
        )
    }
}

export { Services }