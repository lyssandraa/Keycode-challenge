document.addEventListener("DOMContentLoaded", () => {
  const welcomeMes = document.getElementById("welcomeMes");
  const contentMes = document.getElementById("contentMes");

  const eventKey = document.getElementById("eventKey");
  const eventWhich = document.getElementById("eventWhich");
  const eventCode = document.getElementById("eventCode");

  function keycode(event) {
    const { key, which, code } = event;
    keycode.textContent = which;
    eventKey.innerHTML = key;
    eventWhich.innerHTML = which;
    eventCode.innerHTML = code;

    contentMes.classList.remove("hidden");
    welcomeMes.remove();
  }

  document.addEventListener("keydown", keycode);
});
