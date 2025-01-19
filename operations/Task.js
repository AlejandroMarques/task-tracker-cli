import fs from 'fs'
export class Task {
  arguments
  constructor(props){
    this.arguments = props
  }

  readJSON(){
    return JSON.parse(fs.readFileSync('./tasks.json'))
  }

  saveJSON(json) {
    fs.writeFileSync('./tasks.json', JSON.stringify(json))
  }

  add() {
    const tasks = this.readJSON()
    const newTask = {
      id: tasks[tasks.length - 1]?.id ? tasks[tasks.length - 1].id + 1 : 1,
      description: this.arguments[3],
      status: 'todo',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    tasks.push(newTask)
    console.log(`Task "${newTask.description}" created`)
    this.saveJSON(tasks)
  }

  updateField(field, value) {
    const tasks = this.readJSON()
    const task = this.read()
    task[field] = value
    const updatedTask = tasks.map(t => {
      return t.id === task.id ? task : t
    })
    console.log(`Task with id: ${task.id} updated`)
    this.saveJSON(updatedTask)
  }

  read() {
    const tasks = this.readJSON()
    const id = Number(this.arguments[3])
    const task = tasks.find(task => task.id === id)
    if(!task) {
      console.log('Task with that id dont exists')
      return
    }
    return task
  }

  list() {
    const tasks = this.readJSON()
    const status = process.argv[3]
    if(!status) {
      console.log(tasks)
      return
    }
    const result = tasks.filter(task => task.status === status)
    console.log(result)
  }

  update(field, value) {
    this.updateField(field, value ?? this.arguments[4])
    const task = this.read()
    console.log(task)
  }

  delete() {
    const tasks = this.readJSON()
    const result = tasks.filter(task => task.id !== Number(this.arguments[3]))
    this.saveJSON(result)
    console.log(result)
  }
}