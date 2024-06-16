// Base de datos de usuarios con nombres de usuario y contraseñas (reemplazar con un método de almacenamiento más seguro)
const usersDatabase = [
    { username: "andres", password: "123" },
    { username: "caro", password: "456" },
    { username: "mariana", password: "789" },
  ];
  
  // Publicaciones de la línea de tiempo con nombres de usuario y mensajes
  const usersTimeline = [
    { username: "Estefany", timeline: "¡Me encanta Javascript!" },
    { username: "Oscar", timeline: "¡Bebeloper es lo mejor!" },
    { username: "Mariana", timeline: "A mí me gusta más el café que el té" },
    { username: "Andres", timeline: "Yo hoy no quiero trabajar" },
  ];
  
  // Solicita al usuario su nombre de usuario y contraseña
  const username = prompt("¿Cuál es tu usuario?");
  const password = prompt("¿Cuál es tu contraseña?");
  
  // Función para verificar si un usuario existe en la base de datos
  function usuarioExistente(username, password) {
    for (let i = 0; i < usersDatabase.length; i++) {
      // Comprueba si el nombre de usuario y la contraseña coinciden con una entrada en la base de datos
      if (usersDatabase[i].username === username && usersDatabase[i].password === password) {
        return true; // Usuario encontrado, devuelve true
      }
    }
    return false; // Usuario no encontrado, devuelve false
  }
  
  // Función para iniciar sesión del usuario
  function signIn(username, password) {
    if (usuarioExistente(username, password)) {
      alert(`Bienvenido a tu cuenta ${username}`);
      console.log(usersTimeline); // Muestra las publicaciones de la línea de tiempo al iniciar sesión correctamente (considera una forma más amigable para el usuario de mostrarlas)
    } else {
      alert("¡Uuups, usuario o contraseña incorrectos!");
    }
  }
  
  // Llama a la función de inicio de sesión con el nombre de usuario y la contraseña ingresados
  signIn(username, password);
  