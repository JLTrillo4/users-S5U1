// Obtiene datos simulados de usuarios desde la API JSONPlaceholder https://jsonplaceholder.typicode.com/users.
// Agrega una edad aleatoria a cada usuario.
//Cada usuario tendrá una imagen asociada por ID (están en la carpeta assets/img) son extensión .jpeg
// Muestra detalles específicos de cada usuario en la lista en el DOM: name, age, username, img, phone, email, company, address
// address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city

//! Ejercicio Completado

// Función para obtener los datos de los usuarios
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    if (!res.ok) {
      throw new Error("Ha ocurrido un error al obtener los datos");
    }
    return res.json(); // Convierte la respuesta a JSON
  })
  .then((data) => {
    // Recorremos los datos de los usuarios
    data.forEach((usuario) => {
      // Generamos una edad aleatoria entre 18 y 50 años
      usuario.age = Math.floor(Math.random() * (50 - 18 + 1) + 18);
      
      // Desestructuramos los datos del usuario
      const { id, name, username, email, phone, company, address } = usuario;
      
      // Creamos el contenedor para cada usuario
      const nuevoUsuario = document.createElement("li");
      nuevoUsuario.classList.add("usuario");

      // Construimos el HTML para el usuario
      nuevoUsuario.innerHTML = `
        <div class="usuario-info">
          <img src="./assets/img/${id}.jpeg" alt="${name}" class="usuario-img">
          <div class="usuario-detalles">
            <h2>${name}</h2>
            <p><strong>Edad:</strong> ${usuario.age}</p>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Compañía:</strong> ${company.name}</p>
            <p><strong>Dirección:</strong> ${address.street}, ${address.suite}, ${address.city}</p>
          </div>
        </div>
      `;

      // Agregamos el nuevo usuario a la lista
      document.getElementById('listaUsuarios').appendChild(nuevoUsuario);
    });
  })
  .catch((error) => {
    // Si hay algún error, lo mostramos en consola
    console.error("Error:", error.message);
  });