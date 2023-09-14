// CheckCredentials.js

// Simulación de una base de datos de usuarios (esto es solo para fines de demostración).
const usersDatabase = [
  { email: 'us1@gmail.com', password: 'password1' },
  { email: 'us2@gmail.com', password: 'password2' },
  
];

// Función para comprobar las credenciales del usuario.
function checkCredentials(email, password) {
  const user = usersDatabase.find((user) => user.email === email);

  if (user && user.password === password) {
    return true; // Las credenciales son válidas.
  }

  return false; // Las credenciales no son válidas.
}

export default checkCredentials;
