window.addEventListener("load", () => {
  const form = document.querySelector("#task-id");
  const input = document.querySelector("#new-input-task");
  console.log(input);
  const tasks_List = document.querySelector(".tasks");
  console.log(tasks_List);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
    const work = input.value.trim();
    if (work == "") {
      alert("please enter the value");
      return;
    }
    input.value = "";

    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const content_el = document.createElement("div");
    content_el.classList.add("content");
    const input_el = document.createElement("input");
    input_el.classList.add("text");
    input_el.type = "text";
    input_el.value = work;
    input_el.setAttribute("readonly", "readonly");
    content_el.appendChild(input_el);
    task_el.appendChild(content_el);
    const action_el = document.createElement("div");
    action_el.classList.add("actions");
    const edit_el = document.createElement("button");
    edit_el.classList.add("edit");
    edit_el.innerText = "Edit";
    action_el.appendChild(edit_el);
    const delete_el = document.createElement("button");
    delete_el.classList.add("delete");
    delete_el.innerText = "Delete";
    action_el.appendChild(delete_el);
    task_el.appendChild(action_el);
    tasks_List.appendChild(task_el);
    edit_el.addEventListener("click", () => {
      console.log(edit_el.innerText);
      if (edit_el.innerText == "EDIT") {
        edit_el.innerText = "SAVE";
        input_el.removeAttribute("readonly");
        input_el.focus();
      } else {
        edit_el.innerText = "EDIT";
        input_el.setAttribute("readonly", "readonly");
      }
    });
    delete_el.addEventListener("click", () => {
      tasks_List.removeChild(task_el);
    });
  });
});
