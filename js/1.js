document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let lastScrollY = window.scrollY; // Сохранение позиции прокрутки

    function checkCards() {
        const triggerBottom = window.innerHeight * 0.85; // Порог для появления
        const triggerTop = window.innerHeight * 0.2;    // Порог для скрытия

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom && window.scrollY > lastScrollY) {
                // Прокрутка вниз: показываем карточку
                card.classList.add("show");
                card.classList.remove("reverse");
            } else if (cardTop > triggerTop && window.scrollY < lastScrollY) {
                // Прокрутка вверх: плавно анимируем
                card.classList.add("reverse");
                card.classList.remove("show");
            } else if (window.scrollY > lastScrollY) {
                // Сброс состояния reverse при возвращении вниз
                card.classList.remove("reverse");
            }
        });

        lastScrollY = window.scrollY; // Обновляем позицию прокрутки
    }

    window.addEventListener("scroll", checkCards);
    checkCards(); // Инициализация
});