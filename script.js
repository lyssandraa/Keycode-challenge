document.addEventListener("DOMContentLoaded", () => {
  const welcomeMes = document.getElementById("welcomeMes");
  const contentMes = document.getElementById("contentMes");
  const head = document.getElementById("keycode");

  const eventKey = document.getElementById("eventKey");
  const eventWhich = document.getElementById("eventWhich");
  const eventCode = document.getElementById("eventCode");
  const eventLocation = document.getElementById("eventLocation");

  function keycode(event) {
    const { key, which, code, location } = event;
    head.textContent = key;
    eventKey.innerHTML = key;
    eventWhich.innerHTML = which;
    eventCode.innerHTML = code;
    eventLocation.innerHTML = location;

    contentMes.classList.remove("hidden");
    welcomeMes.remove();
  }

  document.addEventListener("keydown", keycode);
});
