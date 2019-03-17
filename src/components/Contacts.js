import React from 'react'
import textStrings from '../data/textStrings.json'
import contactsPageContent from '../data/contactsPageContent.json'

const Contacts = () => {
        return (
            <div className="PageContent">
                <h1>{textStrings.contacts}</h1>
                <p>{contactsPageContent.businessType} {textStrings.organizationName}</p>
                <p>{contactsPageContent.address}</p>
                <p>{contactsPageContent.bank}</p>
                <p>{contactsPageContent.bankCode}</p>
                <p>{contactsPageContent.CEO}</p>
                <p>{contactsPageContent.emale}</p>
            </div>
        )
}

export { Contacts }