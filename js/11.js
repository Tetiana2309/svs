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
    burgerMenu.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Предотвращает двойное срабатывание
        openMenu();
    });

    closeMenuButton.addEventListener('click', closeMenu);
    closeMenuButton.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Предотвращает двойное срабатывание
        closeMenu();
    });

    // Закрытие меню и переход к секции при клике на ссылку
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1); // Получаем ID секции
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault(); // Предотвращаем стандартное поведение (перезагрузку)
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Плавный скролл
            }
            closeMenu(); // Закрываем меню
        });

        link.addEventListener('touchstart', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault(); // Предотвращаем стандартное поведение
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            closeMenu();
        });
    });
});
