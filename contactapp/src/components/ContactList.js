import React from 'react'

export const ContactList = (data, currentPage, getAllContacts) => {
  return (
    <main className='name'>
        {data?.content?.length === 0 && <div>No Contacts! Add new Contact</div>}
        <ul className="Contact__list">
            {data?.content?.length > 0 && data.content.map(contact => <Contact contact = {contact} key={contact.id}/>)}
        </ul>
        {data?.content?.length > 0 && data?.totalPages > 1 &&
        <div className = "pagination">
            <a onClick = {() => getAllContacts(currentPage - 1)} className={(0=== currentPage ? 'disabled': '')}> &laquo;</a>
            {}
            <a onClick = {() => getAllContacts(currentPage + 1)} className={(data.totalPages -1 === currentPage ? 'disabled': '')}> &raquo;</a>
        </div>
        }
    </main>
  )
}
export default ContactList