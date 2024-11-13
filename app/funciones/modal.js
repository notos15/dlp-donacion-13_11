import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [termsText, setTermsText] = useState('');
 
  useEffect(() => {
    if (isOpen) { // Solo cargar si el modal está abierto
      fetch('/terminos.txt') 
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar los términos');
          }
          return response.text(); // Devuelve el texto de la respuesta
        })
        .then((text) => {
          // Reemplaza saltos de línea por <br/>
          const formattedText = text.replace(/\n/g, '<br/>');
          setTermsText(formattedText); // Almacena el texto en el estado
        })
        .catch((error) => {
          console.error('Error fetching terms:', error); // Maneja cualquier error
        });
    }
  }, [isOpen]); // Dependencia: se ejecuta cada vez que `isOpen` cambia
 
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Términos y Condiciones</h2>
        <div dangerouslySetInnerHTML={{ __html: termsText }} /> 
      
      </div>
    </div>
  );
};

export default Modal;