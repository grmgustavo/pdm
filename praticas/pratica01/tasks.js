const tasks = [
    {
        id: 1,
        name: 'My Task',
        completed: false
    }
]

const getTasks = () => tasks

const addTask = (taskName) => {
    return tasks.push({
        id: tasks.length + 1,
        name: taskName,
        completed: false
    })
}

addTask('My Second Task')

console.log({ tasks })

const removeTask = (taskId) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId)
    tasks.splice(taskIndex, 1)
}

const updateTask = (taskId, task) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId)
    tasks[taskIndex] = task
}

export default {
    getTasks,
    addTask,
    removeTask,
    updateTask
}