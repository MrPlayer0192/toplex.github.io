const tabs = document.querySelectorAll(".tab");
const tabPanes = document.querySelectorAll(".tab-pane");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Убираем активный класс со всех вкладок
    tabs.forEach(t => t.classList.remove("active"));
    // Убираем активный класс со всех панелей
    tabPanes.forEach(pane => pane.classList.remove("active"));

    // Добавляем активный класс к выбранной вкладке
    tab.classList.add("active");
    // Добавляем активный класс к соответствующей панели
    const target = tab.dataset.target;
    document.querySelector(target).classList.add("active");
  });
});