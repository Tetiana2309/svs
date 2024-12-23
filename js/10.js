document.addEventListener("DOMContentLoaded", function () {
    const languageLinks = document.querySelectorAll(".language-link");
    const body = document.body;

    languageLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Предотвращаем переход по ссылке
            const selectedLanguage = this.getAttribute("data-language");

            // Удаляем текущие классы языка и добавляем новый
            body.classList.remove("lang-ua", "lang-pl");
            body.classList.add(`lang-${selectedLanguage}`);

            // Добавляем активный класс к выбранному языку
            languageLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Обновляем текст на нужный язык
            updateLanguageContent(selectedLanguage);
        });
    });

    // Функция для обновления текста на странице
    function updateLanguageContent(lang) {
        document.querySelectorAll("[data-lang-ua], [data-lang-pl]").forEach(element => {
            if (lang === "ua") {
                element.textContent = element.getAttribute("data-lang-ua");
            } else if (lang === "pl") {
                element.textContent = element.getAttribute("data-lang-pl");
            }
        });
    }
});