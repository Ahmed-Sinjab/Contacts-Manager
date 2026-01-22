import React from 'react'

export const Header = ({toggleModal, nbOfContacts}) => {
  return (
    <header className='header'>
        <div className = "container">
            <h3>Contacts List ({nbOfContacts})</h3>
            <button onClick={() => toggleModal(true)} className='btn'><i className = "bi bi-plus-circle"></i>Add Contact</button>
        </div>
    </header>
  )
}
export default Header