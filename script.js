document.addEventListener("DOMContentLoaded", () => {
  const planButton = document.getElementById("plan-button");
  const secretInfo = document.getElementById("secret-info");

  if (planButton) {
    planButton.addEventListener("click", () => {
      const userData = document.getElementById('user-data');
      userData.innerHTML = `
        <div class="info-label">IP-адрес:</div>
        <div>Загрузка...</div>
        <br>
        <div class="info-label">Браузер:</div>
        <div>${navigator.userAgent}</div>
        <br>
        <div class="info-label">Платформа:</div>
        <div>${navigator.platform}</div>
        <br>
        <div class="info-label">Язык:</div>
        <div>${navigator.language}</div>
        <br>
        <div class="info-label">Разрешение экрана:</div>
        <div>${screen.width}x${screen.height}</div>
        <br>
        <div class="info-label">Время доступа:</div>
        <div>${new Date().toLocaleString()}</div>
      `;

      secretInfo.classList.add('visible');

      const script = document.createElement('script');
      script.src = 'https://api.ipify.org?format=jsonp&callback=handleIP';
      document.head.appendChild(script);
    });
  }
});

function handleIP(response) {
  const userData = document.getElementById('user-data');
  const ipElement = userData.querySelector('div:nth-child(2)');
  if (ipElement) {
    ipElement.textContent = response.ip;
  }
}