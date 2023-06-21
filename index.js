function addTask() {
    const input = document.getElementById('ipt');
    const text = input.value;
    if (text.length) {
        const list = document.getElementById('listadeproceso');
        const newItem = document.createElement('li');
        newItem.className = 'list-item';
        const divHalf = document.createElement('div');
        const divLadoIzquierdo = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', completed);
        const label = document.createElement('label');
        label.textContent = text;
        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'ladoderecho');
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click',editTask);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click',deleteTask);

        deleteButton.setAttribute('class', 'eliminareditar'); 
        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);
        divLadoIzquierdo.appendChild(checkbox);
        divLadoIzquierdo.appendChild(label);
        divHalf.appendChild(divLadoIzquierdo);
        divHalf.appendChild(buttons);
        newItem.appendChild(divHalf);

        newItem.innerHTML = `
            <div class="half">
                <div class="ladoizquierdo">
                    <input type="checkbox" onchange="completed(event)">
                    <label>${text}</label>
                </div>
                <div class="ladoderecho">
                    <button onclick="editTask(event)" class="eliminareditar">Editar</button>
                    <button onclick="deleteTask(event)" class="eliminareditar">Eliminar</button>
                </div>
            </div>
        `;
        newItem.style.marginBottom = '10px'; 

        list.appendChild(newItem);
        input.value="";
    }
}

function completed(event){
    const value= event.target.checked;
    const list = document.getElementById('listadeproceso');
    const item = event.target.parentNode;
    item.parentNode.parentNode.removeChild(item.parentNode);

    const completedList = document.getElementById('completadol')

    const completedItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.checked=true;
    checkbox.disabled=true;

    const label = document.createElement('label');
    const text= item.querySelector('label').textContent;
    label.textContent=text;
    completedItem.appendChild(checkbox);
    completedItem.appendChild(label);
    completedList.appendChild(completedItem);
}


function deleteTask(event) {
    const deleteItem = event.target.parentNode.parentNode.parentNode;
    const list = document.getElementById('listadeproceso');
    list.removeChild(deleteItem);
}

function editTask(event) {
    const editButton = event.target;
    const listItem = editButton.parentNode.parentNode;
    const label = listItem.querySelector('label');
  
    if (label.getAttribute('contenteditable') === 'false') {
      label.setAttribute('contenteditable', 'true');
      label.focus(); 
      editButton.textContent = 'Guardar'; 
    } else {
      label.setAttribute('contenteditable', 'false');
      editButton.textContent = 'Editar'; 
    }
  }
  

function clearList(){
    const list = document.getElementById('completadol');
    list.innerHTML=' ';
}




  
  
  
  
  
  
  
document.addEventListener('DOMContentLoaded', function() {
    const completedList = document.getElementById('completadol');
    const completedItems = completedList.getElementsByTagName('li');

    for (let i = 0; i < completedItems.length; i++) {
        const checkbox = completedItems[i].querySelector('input[type="checkbox"]');
        checkbox.checked = true;
        checkbox.disabled = true;
    }
});
