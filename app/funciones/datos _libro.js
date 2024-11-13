"use client";
import React, { useState } from 'react';
import Cuadro from "@/app/funciones/ctexto.js";
import Libro from "@/app/formulario/libro.json";

export function no_ISBN(){
    return(
        <div>
            <div className='titulo1'> Debe rellenar manualmente los datos del Libro</div>
            {Libro.cuadrotx.map((preg,j)=>(
            <div className='rellenar'>
                <div className='tex'>{preg.id}</div>
                <Cuadro dato={preg.gris}></Cuadro>
            </div>
            ))}
            {Libro.tes.map((pregunta, i) => (
                <div className='precionar' key={i}>
                    <div className="titulo1">{pregunta.pregunta}</div> {/* Mostrar la pregunta */}
                    <div className='rellenar'>
                        <div className='opciones'>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input type={pregunta.tipo} name={pregunta.id} value={opcion} />
                                {opcion}
                            </label>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};
//en esta funcion se tendria que despues analizar si funciona o no la libreria, si no tendria que ir a la funcion no_ISBN(), Aparte que se tendria que agregar a esta 
//funcion que se vea la imagen del libro, donde se tendria que confirmar la imagen del libro o no 
export function si_ISBN(){
    return(
        <div>
            <div className='titulo1'> Asegurate que los datos del libro esten todos correctos</div>
            {Libro.cuadrotx.map((preg,j)=>(
            <div className='rellenar'>
                <div className='tex'>{preg.id}</div>
                <Cuadro dato={preg.gris}></Cuadro>
            </div>
            ))}
            {Libro.tes.map((pregunta, i) => (
                <div className='precionar' key={i}>
                    <div className="titulo1">{pregunta.pregunta}</div> {/* Mostrar la pregunta */}
                    <div className='rellenar'>
                        <div className='opciones'>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input type={pregunta.tipo} name={pregunta.id} value={opcion} />
                                {opcion}
                            </label>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}