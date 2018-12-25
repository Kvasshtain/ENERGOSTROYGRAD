import React from 'react'
import textStrings from '../data/textStrings.json'

const NavigationPanel = () => {
    return (
        <nav class = "NavigationPanel">
                <ul class = "HorizontalPanel">
                    <li><button>{textStrings.index}</button></li>
                    <li><button>{textStrings.about}</button></li>
                    <li><button>{textStrings.services}</button></li>
                    <li><button>{textStrings.contacts}</button></li>
                </ul>
        </nav>
    )
}

export { NavigationPanel }