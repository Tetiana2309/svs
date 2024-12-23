document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".list-item");

    listItems.forEach((item) => {
        const title = item.querySelector(".list-title");
        const text = item.querySelector(".list-txt");
        const iconSmall = item.querySelector(".icon-small");
        const iconBig = item.querySelector(".icon-big");

        // Таймер для сброса состояния
        let resetTimeout;

        // Функция для применения стилей при касании
        function applyMobileStyles() {
            clearTimeout(resetTimeout);
            title.style.color = "#b80202";
            text.style.color = "#e0e0e0";
            text.style.opacity = "1";
            iconSmall.style.backgroundColor = "#e0e0e0";
            iconBig.style.backgroundColor = "#e0e0e0";
        }

        // Функция для возврата к исходному состоянию
        function resetMobileStyles() {
            resetTimeout = setTimeout(() => {
                title.style.color = "#e0e0e0";
                text.style.color = "#e0e0e0";
                text.style.opacity = "0.1";
                iconSmall.style.backgroundColor = "#b80202";
                iconBig.style.backgroundColor = "#b80202";
            }, 4000);
        }

        // Обработчики для мобильных устройств (касание)
        title.addEventListener("touchstart", (e) => {
            e.preventDefault();
            applyMobileStyles();
        });
        title.addEventListener("touchend", (e) => {
            e.preventDefault();
            resetMobileStyles();
        });

        text.addEventListener("touchstart", (e) => {
            e.preventDefault();
            applyMobileStyles();
        });
        text.addEventListener("touchend", (e) => {
            e.preventDefault();
            resetMobileStyles();
        });

        // Обработчики для десктопа
        title.addEventListener("mouseenter", () => {
            title.style.color = "#b80202";
            text.style.color = "#e0e0e0";
            text.style.opacity = "1";
            iconSmall.style.backgroundColor = "#e0e0e0";
            iconBig.style.backgroundColor = "#e0e0e0";
        });

        title.addEventListener("mouseleave", () => {
            title.style.color = "#e0e0e0";
            text.style.color = "#e0e0e0";
            text.style.opacity = "0.1";
            iconSmall.style.backgroundColor = "#b80202";
            iconBig.style.backgroundColor = "#b80202";
        });

        text.addEventListener("mouseenter", () => {
            title.style.color = "#b80202";
            text.style.color = "#e0e0e0";
            text.style.opacity = "1";
            iconSmall.style.backgroundColor = "#e0e0e0";
            iconBig.style.backgroundColor = "#e0e0e0";
        });

        text.addEventListener("mouseleave", () => {
            title.style.color = "#e0e0e0";
            text.style.color = "#e0e0e0";
            text.style.opacity = "0.1";
            iconSmall.style.backgroundColor = "#b80202";
            iconBig.style.backgroundColor = "#b80202";
        });
    });
});
