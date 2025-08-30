window.addEventListener("DOMContentLoaded", function () {
    const views = document.getElementById('views');
    const vIn = document.getElementById('view-signin');
    const vUp = document.getElementById('view-signup');
    const rIn = document.getElementById('tab-signin');
    const rUp = document.getElementById('tab-signup');

    function setHeight(el) {
        views.style.height = el.offsetHeight + 'px';
    }

    window.switchView = function (which) {
        const show = which === 'signup' ? vUp : vIn;
        const hide = which === 'signup' ? vIn : vUp;

        hide.classList.remove('active');
        show.classList.add('active');
        requestAnimationFrame(() => setHeight(show));
    };

    // radios toggle
    rIn.addEventListener('change', () => window.switchView('signin'));
    rUp.addEventListener('change', () => window.switchView('signup'));

    // init on load + resize
    function init() {
        setHeight(document.querySelector('.view.active') || vIn);
    }
    window.addEventListener('resize', init);
    init();
});
