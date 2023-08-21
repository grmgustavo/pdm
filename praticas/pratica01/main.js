import {
    addTask,
    getTasks,
    removeTask,
    updateTask
} from './tasks.js'

let taskList = getTasks()

taskList.forEach(task => {
    console.log({ task })
});

addTask('My Second Task')

taskList = getTasks()

taskList.forEach(task => {
    console.log({ task })
})


