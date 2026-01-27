import './App.css';
import { useState, useEffect } from 'react';
import { getContacts } from './api/ContactService';
import Header from './components/Header';
import ContactList from './components/ContactList';
import { Routes, Route, Navigate } from 'react-router-dom';  // Add Navigate

function App() {
  const[data,setData] = useState({});
  const[currentPage,setCurrentPage] = useState(0);
  
  const getAllContacts = async(page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const {data} = await getContacts(page,size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  const toggleModal = (show) => {console.log("Toggle Modal"); }

  useEffect(() => {
      getAllContacts();
    },[]);
    
  return (
    <>
    
      <Header toggleModal={toggleModal} nbOfContacts={data.totalElements}/>
      <main className = "main">
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to={"/contacts"} />} />
          <Route path="/api/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts}/>} />
        </Routes>
      </div>
    </main>
    </>
  );
}

export default App;