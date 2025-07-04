const tasks = []

function aggTask() {
    const input = document.getElementById("newTask");
    const text = input.value.trim();

    if (text === "") return;

    const task = {
        id: Date.now(),
        task: text,
        isDone: false
    };

    console.log(task);

    tasks.push(task)
    input.value = ""
    showTasks();

}

function showTasks() {
    const list = document.getElementById("listTask");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const taskList = tasks[i];
        const li = document.createElement("li");

        li.className = tasks.isDone ? "Hecho" : "";
        li.innerHTML = `
        ${taskList.task} 
        <button onclick="marcarHecho(${taskList.id})"> 
        ${taskList.isDone ? "Desmarcar" : "Hecho"} 
        </`
    }
}

function markDone(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].isDone = !tasks[i].isDone;
        }
    }
    showTasks();    
}

function deleteTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
        }
    }
    showTasks();
}