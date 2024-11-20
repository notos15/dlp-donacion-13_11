"use client";
import React, { useState } from 'react';
import formulario from "@/app/formulario/donador.json";
import Libro from "@/app/formulario/libro.json";
import Modal from "./modal.js";
import Duda from "./duda.js";
import { si_ISBN, no_ISBN } from "@/app/funciones/datos _libro.js";
import { isbndatos } from "@/app/funciones/datos_isbn.js";

export function persona() {
    const [opcionSeleccionadaPersona, setOpcionSeleccionadaPersona] = useState('');
    const handleOpcionPersonaChange = (e) => {
        setOpcionSeleccionadaPersona(e.target.value);
    }; 
    const [isModalOpen, setModalOpen] = useState(false); 
    const [hasSeenTerms, setHasSeenTerms] = useState(false); 
    const [isChecked, setChecked] = useState(false); 
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };
    const handleModalClose = () => {
        setHasSeenTerms(true); // Marca que ha visto los términos
        setModalOpen(false); // Cierra el modal
    };

    return (
        <div>
            {formulario.tes.map((pregunta, i) => (
                <div className='precionar' key={i}>
                    <div className="titulo2">{pregunta.pregunta}</div> {/* Mostrar la pregunta */}
                    <div className='rellenar'>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input
                                    type={pregunta.tipo}
                                    name={pregunta.id}
                                    value={opcion}
                                    
                                    onChange={handleOpcionPersonaChange}
                                />
                                {opcion}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            
            {opcionSeleccionadaPersona !== 'Si' && opcionSeleccionadaPersona !== '' && (
                <div >
                    <div className='rellenar'>
                            <div className='tex'>Correo</div>
                            <input type="email" name="correo" />
                    </div>
                    <div className='rellenar'>
                        <label >
                            <input type="checkbox" checked={isChecked} onChange={(e) => setChecked(e.target.checked)} disabled={!hasSeenTerms}  />
                            <button className="texto-enlace"  onClick={toggleModal} >Términos y Condiciones</button>
                            <Modal isOpen={isModalOpen} onClose={handleModalClose} />
                        </label>
                    </div>
                </div>
                
            )}
        </div>
    );
}

export function codigo() {
    const [opcionSeleccionadaCodigo, setOpcionSeleccionadaCodigo] = useState('');
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [mostrarISBN, setMostrarISBN] = useState(false);

    // Estados para almacenar el título y autor
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    
    const [isDudaVisible, setDudaVisible] = useState(false);  // Añadido el estado para mostrar la duda

    const handleOpcionCodigoChange = (e) => {
        const seleccion = e.target.value;
        setOpcionSeleccionadaCodigo(seleccion);
        setMostrarContenido(false); // Ocultar el contenido anterior
        if (seleccion === 'Si') {
            setMostrarISBN(true); // Muestra el campo ISBN
        } else {
            setMostrarISBN(false); // Oculta el campo ISBN
            setMostrarContenido(true); // Muestra el contenido de no_ISBN
            setOpcionSeleccionadaCodigo('');
        }    
    };

    const siguienteClick = async () => {
        setMostrarContenido(true); // Muestra el contenido al hacer clic
        setMostrarISBN(false); // Oculta el campo ISBN

        const isbn = document.querySelector('input[name="codigo"]').value; // Obtén el valor del ISBN ingresado
        const datosLibro = await isbndatos(isbn);  // Llama a la función isbndatos para obtener los datos
        
        if (datosLibro) {
            setTitulo(datosLibro.titulo);  // Rellena el título
            setAutor(datosLibro.autor);    // Rellena el autor
        } else {
            // Si no se encuentran los datos, puedes manejar el error (por ejemplo, mostrando un mensaje)
            alert("No se encontró el libro con este ISBN.");
        }
    };

    const respuesClick = () => {
        setDudaVisible(true); // Muestra el modal de duda
    };

    const handleModalClose = () => {
        setDudaVisible(false); // Cierra el modal de duda
    };

    return (
        <div>
            {/* Renderiza las preguntas del formulario */}
            {Libro.Codigo.map((pregunta, i) => (
                <div className='precionar' key={i}>
                    <div className="titulo2">
                        <button className="btn_duda" onClick={respuesClick}>?</button>
                        <div>{pregunta.pregunta}</div>
                    </div>
                    <div className='rellenar'>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input
                                    type={pregunta.tipo}
                                    name={pregunta.id}
                                    value={opcion}
                                    onChange={handleOpcionCodigoChange}
                                />
                                {opcion}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            {opcionSeleccionadaCodigo === 'Si' && mostrarISBN && (
                <div>
                    <div className='rellenar'>
                        <div className='tex'>ISBN</div>
                        <input type="text" name="codigo" />
                        <button className="btn" onClick={siguienteClick}>Siguiente</button>
                    </div>
                </div>  
            )}
            {mostrarContenido && (
               <div>
                   {opcionSeleccionadaCodigo === 'Si' ? si_ISBN() :  no_ISBN()}
                </div>
            )}
            {/* Si se rellenaron los datos, mostrar los campos de título y autor */}
            {titulo && autor && (
                <div className='rellenar'>
                    <div className='tex'>Título</div>
                    <input type="text" value={titulo} readOnly />
                </div>
            )}
            {titulo && autor && (
                <div className='rellenar'>
                    <div className='tex'>Autor</div>
                    <input type="text" value={autor} readOnly />
                </div>
            )}
            {isDudaVisible && (
                <div className="rellenar">
                    <Duda isOpen={isDudaVisible} onClose={handleModalClose}/>
                </div>
            )}
        </div>
    );
}
