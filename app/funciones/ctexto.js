"use client";
import React, { useState } from 'react';
const Cuadro=({dato})=>{
    const [nombre, setNombre] = useState("aaaa");
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