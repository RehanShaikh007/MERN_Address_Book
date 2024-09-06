import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <div className="mt-8">
            {contacts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contacts.map(contact => (
                        <div key={contact._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">{contact.name}</h2>
                            <p className="text-gray-600">{contact.email}</p>
                            <p className="text-gray-600">{contact.phone}</p>
                            <button
                                className="mt-2 bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-200"
                                onClick={() => deleteContact(contact._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No contacts available.</p>
            )}
        </div>
    );
};

export default ContactList;
