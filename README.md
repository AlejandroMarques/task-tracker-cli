# task-tracker-cli
Herramienta CLI para poder llevar un tracking de tareas

## ¿Cómo instalarlo?

Clonar el repositorio de github en la carpeta donde lo quieras guardar
```
git clone https://github.com/AlejandroMarques/task-tracker-cli.git
```

Entrar en la carpeta del proyecto `
```
cd task-tracker-cli
```

Ejecutar el comando de configuración del proyecto
```
npm run configure
```

## ¿Cómo utilizarlo?
```
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress

```