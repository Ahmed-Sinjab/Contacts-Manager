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
  
  const toggleModel = (show) => {}

  useEffect(() => {
      getAllContacts();
    },[]);
    
  return (
    <div>
      <Header toggleModel={toggleModel} nbOfContacts={data.totalElements}/>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />  {/* Add this line */}
        <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts}/>} />
      </Routes>
    </div>
  );
}

export default App;