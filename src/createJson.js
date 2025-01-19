import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import pkg from 'dotenv';
const { config } = pkg;

config(); // Cargar variables de entorno desde el archivo .env

const fileName = 'tasks.json';
const filePath = resolve(fileName); // Obtiene la ruta absoluta

try {
  if (!existsSync(filePath)) {
    writeFileSync(filePath, '[]'); // Crea el archivo con contenido vacío
    console.log('El archivo tasks.json ha sido creado!');
  } else {
    console.log('El archivo tasks.json ya existe.');
  }

  // Establece la variable de entorno con la ruta absoluta
  writeEnvVariable('TASKS_FILE_PATH', filePath);
  console.log(`Ruta absoluta de tasks.json: ${process.env.TASKS_FILE_PATH}`);
} catch (err) {
  console.error('Error:', err);
}

function writeEnvVariable(key, value) {
  const envContent = `${key}=${value}\n`;
  writeFileSync('.env', envContent); // Añade o actualiza la variable en el .env
}
