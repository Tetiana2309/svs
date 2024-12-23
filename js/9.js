document.addEventListener("DOMContentLoaded", function () {
    // Получаем все элементы переключения языка для основной панели и мобильного меню
    const allLanguageLinks = document.querySelectorAll(".language-link, .language-link-mob");

    allLanguageLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const selectedLanguage = this.dataset.language; // "ua" или "pl"

            // Обновляем тексты на странице
            document.querySelectorAll("[data-lang-ua], [data-lang-pl]").forEach(element => {
                if (selectedLanguage === "ua") {
                    element.textContent = element.dataset.langUa; // Текст для украинского
                } else if (selectedLanguage === "pl") {
                    element.textContent = element.dataset.langPl; // Текст для польского
                }
            });

            // Применяем стили для текста кнопки
            const buttonText = document.querySelector(".btn-txt-mob");
            if (selectedLanguage === "ua") {
                buttonText.style.width = "220px";
                buttonText.style.fontSize = "18px";
            } else if (selectedLanguage === "pl") {
                buttonText.style.width = "250px";
                buttonText.style.fontSize = "16px";
            }

            // Применяем стили для контейнера кнопки
            const buttonContainer = document.querySelector(".button-mob");
            if (selectedLanguage === "ua") {
                buttonContainer.style.width = "256px";
            } else if (selectedLanguage === "pl") {
                buttonContainer.style.width = "290px";
            }
            // Применяем стили для линии
            const line = document.querySelector(".line-mob");
            if (selectedLanguage === "ua") {
                line.style.width = "254px";
            } else if (selectedLanguage === "pl") {
                line.style.width = "292px";
            }
            // Обновляем активный стиль для выбранного языка
            allLanguageLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});