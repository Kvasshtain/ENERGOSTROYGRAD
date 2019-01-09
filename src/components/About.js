import React from 'react'
import textStrings from '../data/textStrings.json'
import aboutPageContent from '../data/aboutPageContent'

class About extends React.Component {

    renderAchievementList = () => {
        return aboutPageContent.achievements.map(function(item) {
            return (
                <li>
                    {item}
                </li>
            )
        })
    }

    render() {
        return (
            <div class = "PageContent">
                <h1>{textStrings.organizationName}</h1>
                <div class = "PageBlock">
                    <p>{aboutPageContent.mainContent1}</p>
                    <p>{aboutPageContent.mainContent2}</p>
                    <ul>
                        {this.renderAchievementList()}
                    </ul>
                </div>
            </div>
        )
    }
}

export { About }