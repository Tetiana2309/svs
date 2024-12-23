document.addEventListener("DOMContentLoaded", () => {
    const preloaderWrapper = document.querySelector(".preloader-5-wrapper");

    // Эмулируем процесс загрузки (здесь вы можете вставить реальный процесс)
    setTimeout(() => {
        preloaderWrapper.classList.add("preloader-hidden");

        // Полное удаление прелоадера из DOM
        setTimeout(() => {
            preloaderWrapper.classList.add("preloader-none");
            document.body.style.overflow = "auto"; // Включаем прокрутку
        }, 500); // Учитываем время исчезновения (0.5s)
    }, 1000); // Прелоадер работает 3 секунды
});