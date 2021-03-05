const MOVIE_SELECT = document.querySelector("#movie-select");
const TIME_SELECT = document.querySelector("#time-select");
const MOVIE_RESULT_CONTAINER = document.querySelector(".movie");
const TIME_RESULT_CONTAINER = document.querySelector(".time");
const SEATS_RESULT_CONTAINER = document.querySelector(".seats");
const HALL_ITEMS = document.querySelectorAll(".hall-item__input");
const HALL_ITEM = document.querySelectorAll(".hall-item");
let activeSeatsList = [];

const displayResultFromSelect = (selectElement, resultField) => {
  selectElement.addEventListener("change", (event) => {
    const selectValue = event.target.value;
    handleMovieExists();
    removeActiveSeats();
    displayDefaultResult(SEATS_RESULT_CONTAINER);
    activeSeatsList = [];
    if (!selectValue) {
      displayDefaultResult(resultField);
    } else {
      resultField.innerHTML = `${selectValue}`;
    }
  });
};

const removeActiveSeats = () => {
  HALL_ITEMS.forEach((item) => (item.checked = false));
};
const changeSeatsState = (isDisabled) => {
  HALL_ITEMS.forEach((item) => (item.disabled = isDisabled));
};
const displayDefaultResult = (resultField) => (resultField.innerHTML = "-");

const handleMovieExists = () => {
  if (MOVIE_SELECT.value && TIME_SELECT.value) {
    const isSeatsDisabled = false;
    changeSeatsState(isSeatsDisabled);
  } else {
    const isSeatsDisabled = true;
    changeSeatsState(isSeatsDisabled);
  }
};

const handleSeatsResult = () => {
  const hall = document.querySelector(".hall");
  hall.addEventListener("change", (event) => {
    const target = event.target;
    const seatValue = target.value;
    if (target.classList.contains("hall-item__input")) {
      if (!activeSeatsList.includes(seatValue)) {
        activeSeatsList.push(seatValue);
        displaySeatsResult(activeSeatsList);
      } else {
        activeSeatsList.splice(activeSeatsList.indexOf(seatValue), 1);
        displaySeatsResult(activeSeatsList);
      }
    }
  });
};

const displaySeatsResult = (resultData) => {
  let seatsInfoDataHtml = "";
  resultData.forEach((item) => {
    const seatValue = item.split("-");
    const [seatNum, rowNum] = seatValue;
    const result = `<span>seat <strong>${seatNum}</strong> row <strong>${rowNum}</strong>;</span> `;
    seatsInfoDataHtml += result;
  });

  SEATS_RESULT_CONTAINER.innerHTML = "";

  if (seatsInfoDataHtml !== "") {
    SEATS_RESULT_CONTAINER.innerHTML = seatsInfoDataHtml;
  } else {
    displayDefaultResult(SEATS_RESULT_CONTAINER);
  }
};

handleSeatsResult(SEATS_RESULT_CONTAINER);
handleMovieExists();
displayResultFromSelect(MOVIE_SELECT, MOVIE_RESULT_CONTAINER);
displayResultFromSelect(TIME_SELECT, TIME_RESULT_CONTAINER);
