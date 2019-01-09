import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import textStrings from '../data/textStrings.json'

const NavigationPanel = () => {
    return (
        <nav class = "NavigationPanel">
            <ul class = "HorizontalPanel">
                <li>
                    <Link to = '/about'>
                        <button>{textStrings.about}</button>
                    </Link>
                </li>
                <li>
                    <Link to = '/services'>
                        <button>{textStrings.services}</button>
                    </Link>
                </li>
                <li><button>{textStrings.contacts}</button></li>
                <li><button>{textStrings.ourWork}</button></li>
            </ul>
        </nav>
    )
}

export { NavigationPanel }