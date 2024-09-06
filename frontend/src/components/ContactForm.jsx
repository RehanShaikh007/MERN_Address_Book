import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
            />
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
            />
            <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
            >
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;
