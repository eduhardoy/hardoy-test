export const obtenerDatos = async queries => {
  try {
    const data = await fetch(
      `https://ll.thespacedevs.com/2.0.0/astronaut?limit=10${queries}`
    );
    const astronauts = await data.json();
    return astronauts;
  } catch (error) {
    console.error(error);
    return null;
  }
};
