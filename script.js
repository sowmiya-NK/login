let name = document.getElementById("name");
let number = document.getElementById("number");
let todolist = document.getElementById("todolist");
let button = document.getElementById("add");

let listid = 0;

let array = [
  {
    id: 1,
    name: "sowmiya",
    number: "3487208703",
  },
  {
    id: 2,
    name: "anu",
    number: "3237492782",
  },
  {
    id: 3,
    name: "lathi",
    number: "9876392743",
  },
];

let id = 3;

const arrayloop = () => {
  let output = "";
  for (let todo of array) {
    output += `<div class=" d-flex justify-content-around p-1 border border-success w-70 m-3  ">
        <p class="fs-6 m-0">${todo.id}</p>
        <p class="fs-6 m-0">${todo.name}</p>
        <p class="fs-6 m-0">${todo.number}</p>
        <div>
        <button onclick="editbtn(${todo.id})"  class="btn bg-primary ">Edit</button>
        <button onclick="deletebtn(${todo.id})" class="btn  bg-danger  ">Delete</button>
        </div>
        </div>`;
  }
  todolist.innerHTML = output;
};

arrayloop();

// add button
button.addEventListener("click", () => {
  if (name.value !== "" && number.value !== "") {
    if (isEdited === 0) {
      array.push({
        id: ++id,
        name: name.value,
        number: number.value,
      });
      arrayloop();
      name.value = "";
      number.value = "";
    } else {
      for (let i of array) {
        if (i.id === isEdited) {
          i.name = name.value;
          i.number = number.value;
        }
      }
      name.value="";
      number.value="";
      button.innerText = "Add";
      arrayloop();
      isEdited = 0;
    }
  }
  // arrayloop();
});

// delete button
const deletebtn = (delid) => {
  // console.log(delid);
  array = array.filter((x) => {
    if (x.id !== delid) {
      return x;
    }
  });
  arrayloop();
};

let isEdited = 0;

const editbtn = (edidid) => {
  for (let i of array) {
    if (i.id === edidid) {
      name.value = i.name;
      number.value = i.number;
      button.innerText = "edit";
      isEdited = edidid;
    }
  }
};
