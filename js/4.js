document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-form-");
    const inputSection = document.querySelector(".input-section");
    const inputField = document.getElementById("input-field");
    const submitButton = document.getElementById("submit-btn");
    const checkbox = document.getElementById("agree");
    const notification = document.getElementById("notification");

    const telegramBotToken = "7542516303:AAFhXB8CKOPfoSyZWyuHX9W_faUXNvHrjko"; // Ваш токен бота
    const chatId = "-4622893501"; // Ваш chat_id

    let currentType = ""; // Текущий тип контакта
    let currentLanguage = "ua"; // Язык по умолчанию

    // Обновление языка через кнопки
    document.querySelectorAll(".language-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            currentLanguage = link.getAttribute("data-language");
            document.querySelectorAll(".language-link").forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
            updatePlaceholders();
        });
    });

    // Тексты уведомлений для разных языков
    const messages = {
        ua: {
            emptyField: "Будь ласка, заповніть поле вводу!",
            noAgreement: "Погодьтесь з політикою обробки персональних даних.",
            success: "Дані успішно відправлено!",
            error: "Помилка при відправці: ",
            networkError: "Не вдалося з'єднатися з Telegram. Перевірте мережу.",
            placeholders: {
                telegram: "Ваш нік у Telegram",
                instagram: "Ваш нік в Instagram",
                phone: "Ваш номер телефону",
                email: "Ваш Email",
                default: "ваш нік в соц мережі або номер телефону"
            }
        },
        pl: {
            emptyField: "Proszę wypełnić pole wejściowe!",
            noAgreement: "Zgódź się na politykę przetwarzania danych osobowych.",
            success: "Dane zostały pomyślnie wysłane!",
            error: "Błąd podczas wysyłania: ",
            networkError: "Nie udało się połączyć z Telegramem. Sprawdź sieć.",
            placeholders: {
                telegram: "Twój nick na Telegramie",
                instagram: "Twój nick na Instagramie",
                phone: "Twój numer telefonu",
                email: "Twój Email",
                default: "Twój nick lub numer telefonu"
            }
        }
    };

    // Функция для обновления плейсхолдера
    function updatePlaceholders() {
        switch (currentType) {
            case "telegram":
                inputField.placeholder = messages[currentLanguage].placeholders.telegram;
                break;
            case "instagram":
                inputField.placeholder = messages[currentLanguage].placeholders.instagram;
                break;
            case "phone":
                inputField.placeholder = messages[currentLanguage].placeholders.phone;
                break;
            case "email":
                inputField.placeholder = messages[currentLanguage].placeholders.email;
                break;
            default:
                inputField.placeholder = messages[currentLanguage].placeholders.default;
        }
    }

    // Функция для отображения уведомлений
    function showNotification(messageKey) {
        const message = messages[currentLanguage][messageKey] || messageKey;
        notification.textContent = message;
        notification.classList.remove("hidden");

        setTimeout(() => {
            notification.classList.add("hidden");
        }, 3000);
    }

    // Показывать поле ввода при нажатии кнопок
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            inputSection.classList.remove("hidden");
            currentType = button.getAttribute("data-type");
            updatePlaceholders();
        });
    });

    // Отправка данных в Telegram
    submitButton.addEventListener("click", async () => {
        const userInput = inputField.value.trim();

        if (!userInput) {
            showNotification("emptyField");
            return;
        }

        if (!checkbox.checked) {
            showNotification("noAgreement");
            return;
        }

        const message = `Новая заявка!\nТип контакта: ${currentType.toUpperCase()}\nДанные: ${userInput}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            });

            const result = await response.json();

            if (response.ok && result.ok) {
                showNotification("success");
                inputField.value = "";
                inputSection.classList.add("hidden");
                checkbox.checked = false;
            } else {
                console.error("Ошибка при отправке данных:", result.description);
                showNotification("error" + result.description);
            }
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
            showNotification("networkError");
        }
    });
});