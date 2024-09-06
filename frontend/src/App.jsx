import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        const response = await fetch('http://localhost:5000/api/contacts');
        const data = await response.json();
        setContacts(data);
    };

    const addContact = async (contact) => {
        const response = await fetch('http://localhost:5000/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        });
        const newContact = await response.json();
        setContacts([...contacts, newContact]);
    };

    const deleteContact = async (id) => {
        await fetch(`http://localhost:5000/api/contacts/${id}`, { method: 'DELETE' });
        setContacts(contacts.filter(contact => contact._id !== id));
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Address Book</h1>
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
                <ContactForm addContact={addContact} />
                <ContactList contacts={contacts} deleteContact={deleteContact} />
            </div>
        </div>
    );
};

export default App;
