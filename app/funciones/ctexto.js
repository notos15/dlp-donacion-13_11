"use client";
import React, { useState } from 'react';
const Cuadro=({dato})=>{
    const [nombre, setNombre] = useState("");
    return(
        <input
            type="text"
            value={nombre}
            placeholder={dato}
            onChange={(e) => setNombre(e.target.value)}
        />
    );
}
export default Cuadro;