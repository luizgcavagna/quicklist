const form = document.querySelector("form");
const newItem = document.getElementById("new-item");
const list = document.querySelector("ul")
const alertDiv = document.getElementById("alert");

let id = 4;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let value = newItem.value;
  
  if(value){
    let li = `
      <li id="li-${id}">
        <div class="checkbox-image"></div>
        <input type="checkbox" name="list" onclick="crossOutText('li-${id}')">
        <span>${value}</span>
        <button onclick="removeLi('li-${id}')">
          <img src="assets/icons/trash.svg" alt="Deletar">
        </button>
      </li>`

    list.insertAdjacentHTML('beforeend', li);
    
    id++;
    newItem.value = ''
  }
  
});

function removeLi(elementId){
  const element = document.getElementById(elementId);

  if(element){
    element.remove();

    alertDiv.classList.remove("none")

    setTimeout(() => {
        alertDiv.classList.add("none")
    }, 3000); 
  }
}

function closeDiv(){
  alertDiv.classList.add("none")
}

function crossOutText(element){
  const checkbox = document.querySelector(`#${element} input`);
  const text = document.querySelector(`#${element} span`);

  if (checkbox.checked) {
      text.classList.add('crossed-out');
  } else {
      text.classList.remove('crossed-out');
  }
} 