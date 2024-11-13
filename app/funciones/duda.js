import React, { useEffect, useState } from 'react';

const Duda = ({ isOpen, onClose }) => {
    const [termsText, setTermsText] = useState('');

    useEffect(() => {
        if (isOpen) {
            fetch('/ISBN.txt')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error al cargar los términos');
                    }
                    return response.text();
                })
                .then((text) => {
                    const formattedText = text.replace(/\n/g, '<br/>');
                    setTermsText(formattedText);
                })
                .catch((error) => {
                    console.error('Error fetching terms:', error);
                });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>¿Qué es el ISBN?</h2>
                <div dangerouslySetInnerHTML={{ __html: termsText }} />
                <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6HkGGUlZna7sbOqOQuhQn9XdKLpOYmlr1kmOMT0KY0QNvtsOBQTl7gvkgK1QRmXuonz1Pg2NfBg1clljFEF5z01NwGbDQXo-dODhM1ECllzRhMbACM7Q82QZqkor0k06adj1H2r6GWWum/s1600/Qu%25C3%25A9+es+un+ISBN.png" 
                alt="Qué es un ISBN" 
                style={{ maxWidth: '100%', height: 'auto' }} 
            />
            </div>
        </div>
    );
};

export default Duda;