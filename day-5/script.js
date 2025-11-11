 document.getElementById("changeTextBtn").addEventListener("click", function() {
      document.getElementById("para1").textContent = "The paragraph text has been changed!"
 });

 document.getElementById("add-div").addEventListener("click", function() {
     let newDiv = document.createElement("div");
     newDiv.textContent = "I'm a new added div!";
      document.getElementById("container").appendChild(newDiv);

 });


  document.getElementById("removedbtn").addEventListener("click", function() {
      let element = document.getElementById("removed");
      if (element) {
        element.remove();
      } else {
        alert("Element already removed!");
      }
    }); 

  
 let hoverBox = document.getElementById("hoverBox");
    hoverBox.addEventListener("mouseover", function() {
      hoverBox.style.backgroundColor = "lightgreen";
    });
    hoverBox.addEventListener("mouseout", function() {
      hoverBox.style.backgroundColor = "lightgray";
    });

const countEl = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

let value = 0;
console.log(value);
function render() {
  countEl.textContent = value;
  decreaseBtn.disabled = value <= 0;
}

function increase() {
  value += 1;
  render();
}


function decrease() {
  if (value > 0) {
    value -= 1;
    render();
  }
}

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);

render();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {

   if(inputBox.value === ''){
      alert("you must write something !");
   }
   else{
     let li = document.createElement("li");
     li.innerHTML = inputBox.value;
     listContainer.appendChild(li);
     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span);
   }
   inputBox.value = "";
   saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }

    else if (e.target.tagName ==="SPAN") {
      e.target.perentElement.remove();
      saveData();
    }
}, false);

function saveData(){
  localstorage.setItem("Data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML =localstorage.getItem("Data");
}


showTask()