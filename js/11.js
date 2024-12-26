document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.mobile-nav-list a'); // Ссылки мобильного меню

    // Открытие мобильного меню
    const openMenu = () => {
        mobileMenu.classList.add('show');
        mobileMenu.classList.remove('hidden');
    };

    // Закрытие мобильного меню
    const closeMenu = () => {
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('hidden');
    };

    // Добавляем обработчики для открытия и закрытия меню
    burgerMenu.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);

    // Определяем текущую страницу по URL
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html') || currentPage === '/' || currentPage === '') {
        // Логика для страницы index.html
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').substring(1); // Получаем ID секции
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    e.preventDefault(); // Предотвращаем стандартное поведение
                    targetSection.scrollIntoView({ behavior: 'smooth' }); // Плавный скролл
                }
                closeMenu(); // Закрываем меню
            });
        });
    } else if (currentPage.includes('case_one.html')) {
        // Логика для страницы case_one.html
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Предотвращаем стандартное поведение
                const targetHref = link.getAttribute('href'); // Получаем ссылку с якорем
                window.location.href = targetHref; // Перенаправляем на index.html с якорем
            });
        });
    }
});


