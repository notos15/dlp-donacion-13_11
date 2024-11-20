export const isbndatos = async (isbn) => {
  const respuesta = await fetch(`http://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`);
  
  if (respuesta.ok) {
    const datos = await respuesta.json();
    const libro = datos?.docs?.[0];
    
    if (libro) {
      return {
        titulo: libro.title || "",
        autor: libro.authors?.[0]?.name || "",
        imagen: libro.cover?.medium || ""
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
};
