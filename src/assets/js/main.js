'use strict';
let dayNumberContent = document.querySelector('.container__header-date-numberday');
let dayNameContent = document.querySelector('.container__header-date-daymonthyear-day');
let monthAndYearContent = document.querySelector('.container__header-date-daymonthyear-monthyear');

const containerTasks = document.querySelector('.container__form-list');
const addButton = document.querySelector('.add__button');
const modalBackground = document.querySelector('.container__modal');
const modalWindow = document.querySelector('.container__modal-window');
const inputTask = document.querySelector('.add__task-input');
const openModalButton = document.querySelector('.container__footer-button');
const outsideWindow = document.querySelector('.container__modal');


// const allMonths = [
//   'Enero',
//   'Febrero',
//   'Marzo',
//   'Abril',
//   'Mayo',
//   'Junio',
//   'Julio',
//   'Agosto',
//   'Septiembre',
//   'Octubre',
//   'Noviembre',
//   'Diciembre',
// ];

// const allDays = [
//   'Lunes',
//   'Martes',
//   'Miércoles',
//   'Jueves',
//   'Viernes',
//   'Sábado',
//   'Domingo',
// ];

let newTask = {
  value: '',
  checked: false,
  index: '',
};

let tasks = [];
// generar date y guardar valores
 function getDate() {
  let date = new Date ();
  let dayNumber = date.getDate(); //Number of the day (0-31)
  let dayOfTheWeek = date.getDay() - 1;
  let month = date.getMonth();
  let year = date.getFullYear();

  showDate(dayOfTheWeek, dayNumber, month, year);
}

//mostrar en pantalla datos getDate
//Print date on header

function showDate(dayOfTheWeek, dayNumber, month, year) {
  const allMonths = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const allDays = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  let monthName = allMonths[month]; //Name of the month
  let dayName = allDays[dayOfTheWeek]; //Name of the day

  dayNumberContent.innerText = dayNumber;
  dayNameContent.innerText = dayName;
  monthAndYearContent.innerText = monthName + ', ' + year;
}




getDate();
