document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-form-");
    const inputSection = document.querySelector(".input-section");
    const inputField = document.getElementById("input-field");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Показываем поле ввода
            inputSection.classList.add("visible");

            // Задаём плейсхолдер в зависимости от кнопки
            const type = button.getAttribute("data-type");
            switch (type) {
                case "telegram":
                    inputField.placeholder = "Ваш нік у Telegram";
                    break;
                case "instagram":
                    inputField.placeholder = "Ваш нік в Instagram";
                    break;
                case "phone":
                    inputField.placeholder = "Ваш номер телефону";
                    break;
                case "email":
                    inputField.placeholder = "Ваш Email";
                    break;
                default:
                    inputField.placeholder = "ваш нік в соц мережі або номер телефону";
            }

            // Очищаем предыдущее значение
            inputField.value = "";
        });
    });
});