const radiosDate     = document.querySelectorAll('.radios-date input[type="radio"]'),
      selectMes      = document.querySelector(".meses"),
      startDateInput = document.querySelector("#start-date"),
      endDateInput   = document.querySelector("#end-date");

export function dateRangeChanges() {
    radiosDate.forEach((radio) => {
      radio.addEventListener("click", resetRangeDates);
    });
    selectMes.addEventListener("change", resetRangeDates);
    startDateInput.addEventListener("change", resetRangeDates);
    endDateInput.addEventListener("change", resetRangeDates);
  }
  
  function resetRangeDates({ target: { name } }) {
    if (name != "radioMes") {
      radiosDate.forEach((radio) => {
        radio.checked = false;
      });
    }
  
    if (name != "meses") {
      selectMes.selectedIndex = 0;
    }
  
    if (name != "consultDate") {
      startDateInput.value = "";
      endDateInput.value = "";
    }
  }