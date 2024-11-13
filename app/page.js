"use client";
import { useRouter } from "next/navigation";
import { persona, codigo } from "./funciones/datos.js";
// Donar Libros
export default function Home() {
  const router = useRouter();
  const handleGuardarClick = () => {
    
    const correo = document.querySelector('input[name="correo"]')?.value || '';
    const tituloLibro = document.querySelector('input[placeholder="Escriba el nombre correctamente"]')?.value || '';
    const autores = document.querySelector('input[placeholder="si es mas de uno separelo por comas"]')?.value || '';
    const generos = Array.from(document.querySelectorAll('input[name="Genero"]:checked')).map(e => e.value);
  
    const datosLibro = {
      titulo: tituloLibro,
      autores: autores,
      tags: generos,
      donante: correo,
      prestado: false,
      borrado: false
    };
  
   
    const datosCompletos = {
      libro: datosLibro,
    };
  
    const datosJSON = JSON.stringify(datosCompletos, null, 2);
    const blob = new Blob([datosJSON], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'datos_donacion.json';
    link.click();
    URL.revokeObjectURL(link.href);
    router.push("/formulario/qr");
  };

return (
  <div >
    <h1 className="titulo">Donar Libros</h1>

    <div className="cuestionario">
      <h1 className="titulo1">Informacion del Usuario</h1>
      <div>{persona()}</div>
    </div>

    <div className="cuestionario">
      <h1 className="titulo1">Informacion del Libro</h1>
      <div>{codigo()}</div>
    </div>

    <div className="footer">
        <button className="btn">Atrás</button>
        <button className="btn" onClick={handleGuardarClick}>
          Guardar Información
        </button>
      </div>
  </div>
  )
}