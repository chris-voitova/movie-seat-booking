const MOVIE_SELECT = document.querySelector("#movie-select");
const TIME_SELECT = document.querySelector("#time-select");
const MOVIE_RESULT_CONTAINER = document.querySelector(".movie");
const TIME_RESULT_CONTAINER = document.querySelector(".time");
const SEATS_RESULT_CONTAINER = document.querySelector(".seats");
const HALL_ITEMS = document.querySelectorAll(".hall-item__input");
const HALL_ITEM = document.querySelectorAll(".hall-item");

const displaySelectedResult = (selectElement, result) => {
  selectElement.addEventListener("change", (event) => {
    const selectValue = event.target.value;
    handleMovieExists();
    removeActiveSeats();
    if (!selectValue) {
      result.innerHTML = `-`;
    } else {
      result.innerHTML = `${selectValue}`;
    }
  });
};

const removeActiveSeats = () => {
  HALL_ITEMS.forEach((item) => (item.checked = false));
};
const changeSeatsState = (isDisabled) => {
  HALL_ITEMS.forEach((item) => (item.disabled = isDisabled));
};

const handleMovieExists = () => {
  if (MOVIE_SELECT.value && TIME_SELECT.value) {
    const isSeatsDisabled = false;
    changeSeatsState(isSeatsDisabled);
  } else {
    const isSeatsDisabled = true;
    changeSeatsState(isSeatsDisabled);
  }
};

const displaySeatsResult = (result) => {
  const hall = document.querySelector(".hall");
  hall.addEventListener("change", (event) => {
    const target = event.target;
    if (target.classList.contains("hall-item__input")) {
      console.log(target);
      const seatInfo = targetValue;
      // const seatValue = target.firstElementChild.value.split("-");
      // const seatNum = seatValue[0];
      // const rowNum = seatValue[1];
      // if (result.innerHTML === "-") {
      //   result.innerHTML = "";
      // }
      // result.innerHTML += `<span>seat <strong>${seatNum}</strong> row <strong>${rowNum}</strong>;</span> `;
    }
  });
};

displaySeatsResult(SEATS_RESULT_CONTAINER);

// handleMovieExists();
displaySelectedResult(MOVIE_SELECT, MOVIE_RESULT_CONTAINER);
displaySelectedResult(TIME_SELECT, TIME_RESULT_CONTAINER);
