#!/usr/bin/env node


import { Task } from "./src/Task.js";

const operations = {
  add: () => {
    new Task(process.argv).add();
  },
  update: () => {
    new Task(process.argv).update('description');
  },
  list: () => {
    new Task(process.argv).list()
  },
  read: () => {
    new Task(process.argv).read()
  },
  delete: () => {
    new Task(process.argv).delete()
  },
  "mark-in-progress": () => {
    new Task(process.argv).update('status', "in-progress")
  },
  "mark-done": () => {
    new Task(process.argv).update('status', 'done')
  }
};

const main = () => {
  const operation = process.argv[2];
  if (!operation || !operations[operation]) {
    console.log("No operation executed");
    return;
  }
  operations[operation]();
};

main();
