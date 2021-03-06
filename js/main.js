const add = document.querySelector('.add');
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function addCell() {
    randomID = getRandomInt(0,10);
    const list = document.querySelector('.list');
    const cell1 = document.createElement('li');
    const cell2 = document.createElement('li');
    const cell3 = document.createElement('li');
    cell1.classList.add('list__cellnew');
    cell2.classList.add('list__cellnew');
    cell3.classList.add('list__cellnew');
    cell1.innerHTML = `
    <div class="list__card" id="${randomID}" draggable="true">
      <div class="list__card-header" contenteditable="true" >
        Введите название
      </div>
      <div class="list__card-executor" contenteditable="true">
        Введите исполнителя
      </div>
      <div class="list__card-info">
        <textarea class="text" placeholder="Введите задачу"></textarea>
      </div>
      <button class="del">Удалить карточку  
    </div>`;

  list.append(cell1);
  list.append(cell2);
  list.append(cell3);
}

add.addEventListener('click', addCell);

let draggedItem = null;

const dragAndDrop = () => {
  const card = document.querySelector('.list__card');
  const cells = document.querySelectorAll('.list__cell');

//   for (let i = 0; i < card.length; i++){
//       const card = card[i];

//       card.addEventListener('dragstart', () => {
//         draggedItem = card;
//         setTimeout(() => {
//          card.style.display = 'none';
//     }, 0);
//     })
//   };

  const dragStart = function(){
      setTimeout(() => {
        this.classList.add('hide');
      }, 0)
  };

  const dragEnd = function(){
      this.classList.remove('hide');
  };

  const dragOver = function (evt){
      evt.preventDefault();
  };

  const dragEnter = function(evt){
      evt.preventDefault();
      this.classList.add('hovered');
  };

  const dragLeave = function(){
      this.classList.remove('hovered');
  };

  const dragDrop = function(){
      this.append(card);
      this.classList.remove('hovered');
  };

  cells.forEach((cell) => {
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('dragenter', dragEnter);
      cell.addEventListener('dragleave', dragLeave);
      cell.addEventListener('drop', dragDrop);
  });


  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
}

dragAndDrop();

const delet = document.querySelectorAll('.del');
function deleteCell() {
  const del = document.querySelectorAll('.list__cellnew');
  del.remove();
}

delet.addEventListener('click', deleteCell);