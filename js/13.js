document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".txt-one, .txt-two, .txt-three");

    // Функция запуска анимации после исчезновения прелоудера
    const startTitleAnimation = () => {
        titles.forEach((title, index) => {
            setTimeout(() => {
                title.classList.add("animate");
            }, index * 300); // Задержка между заголовками
        });
    };

    // Запускаем анимацию после прелоудера
    setTimeout(startTitleAnimation, 1000); // Время совпадает с прелоудером
});
