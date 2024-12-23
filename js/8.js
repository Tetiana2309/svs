document.addEventListener("DOMContentLoaded", () => {
    const ctaButtons = document.querySelectorAll('.cta-btn'); // Находим все кнопки
    const formSection = document.getElementById('form-section'); // Блок формы

    // Функция для плавной прокрутки к форме
    const scrollToForm = () => {
        formSection.scrollIntoView({
            behavior: "smooth", // Плавная прокрутка
            block: "start"      // Прокрутка к началу формы
        });
    };

    // Добавляем обработчик событий для всех кнопок
    ctaButtons.forEach(button => {
        button.addEventListener("click", scrollToForm);
    });
});