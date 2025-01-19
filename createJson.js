import { access, constants, writeFile } from 'fs';

const fileName = 'tasks.json';

access(fileName, constants.F_OK, (err) => {
  if (err) {
    writeFile(fileName, '[]', (err) => {
      if (err) throw err;
      console.log('El archivo tasks.json ha sido creado!');
    });
  } else {
    console.log('El archivo tasks.json ya existe.');
  }
});
