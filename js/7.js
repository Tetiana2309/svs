document.addEventListener("DOMContentLoaded", () => {
    const btnFooter = document.querySelector('.btn-footer');

    btnFooter.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение

        // Устанавливаем белый цвет текста и границы перед открытием ссылки
        btnFooter.style.color = '#fefefe';
        btnFooter.style.borderColor = '#fefefe';

        // Открываем ссылку
        window.open('https://www.instagram.com/svs.digital.agency/', '_blank');

        // Через небольшую задержку сбрасываем состояние кнопки
        setTimeout(() => {
            btnFooter.style.color = '#fefefe';
            btnFooter.style.borderColor = '#fefefe';
        }, 100);
    });
});

