import React from 'react'
import { Link } from 'react-router-dom'

import textStrings from '../data/textStrings.json'

const NavigationPanel = () => {
    return (
        <nav className = "NavigationPanel">
            <ul className = "HorizontalPanel">
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
                <li>
                    <Link to = '/contacts'>
                        <button>{textStrings.contacts}</button>
                    </Link>
                </li>
                <li>
                    <Link to = '/ourWorks'>
                        <button>{textStrings.ourWorks}</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export {NavigationPanel}