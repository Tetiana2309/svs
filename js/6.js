document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Останавливаем стандартное поведение

            // Удаляем класс active у всех ссылок
            navLinks.forEach(item => item.classList.remove('active'));

            // Добавляем класс active только на текущую ссылку
            this.classList.add('active');

            // Прокрутка к целевому блоку
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // С учетом фиксированной шапки
                    behavior: 'smooth'
                });

                // После завершения прокрутки удаляем класс active
                setTimeout(() => {
                    this.classList.remove('active');
                }, 800); // 800ms соответствует времени прокрутки
            }
        });
    });
});