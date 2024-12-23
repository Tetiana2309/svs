function closeMenuAndScrollToForm() {
    const formSection = document.getElementById("form-section"); // Секция формы
    const mobileMenu = document.querySelector('.mobile-menu'); // Мобильное меню

    if (mobileMenu) {
        // Закрываем мобильное меню
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('hidden');
    }

    if (formSection) {
        // Плавно прокручиваем к форме
        formSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}