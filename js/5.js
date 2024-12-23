document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]'); // Все ссылки-якоря

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Предотвращаем стандартное действие

            const targetId = link.getAttribute("href").substring(1); // Получаем ID цели
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth" // Плавная прокрутка
                });
            }
        });
    });
});