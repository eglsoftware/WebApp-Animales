(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const mount = document.getElementById('app-header');
    if (!mount) return;

    mount.innerHTML = `
      <header class="site-header">
        <div class="nav-wrap">
          <a href="Index.html" class="nav-logo">🐾 Patitas con Esperanza</a>
          <button class="hamburger" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <nav class="nav-menu" aria-label="Navegación principal">
            <a href="Index.html" data-route="Index.html">Inicio</a>
            <a href="pet_donations_info_page.html" data-route="pet_donations_info_page.html">Donaciones</a>
            <a href="pet_adoption_info_page.html" data-route="pet_adoption_info_page.html">Adopciones</a>
            <a href="pet_transit_info_page.html" data-route="pet_transit_info_page.html">Tránsito</a>
          </nav>
        </div>
      </header>
    `;

    const burger = mount.querySelector('.hamburger');
    const menu = mount.querySelector('.nav-menu');
    // Compensar contenido por header fijo
    document.body.classList.add('has-fixed-header');
    if (burger && menu) {
      burger.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      });
      menu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('data-route') || a.getAttribute('href');
          // Cerrar menú primero
          menu.classList.remove('open');
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
          // Navegación programática si está disponible
          if (window.AppNav && typeof window.AppNav.navigate === 'function') {
            e.preventDefault();
            window.AppNav.navigate(href, { source: 'header', label: a.textContent.trim() });
          }
        });
      });
    }
  });
})();