(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const mount = document.getElementById('app-footer');
    if (!mount) return;

    mount.innerHTML = `
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">🐾 Patitas con Esperanza</h3>
            <p class="footer-text">Rescatando y protegiendo seres de luz desde 2020</p>
            <div class="social-links">
              <a href="#" class="social-btn">📘 Facebook</a>
              <a href="#" class="social-btn">📷 Instagram</a>
              <a href="#" class="social-btn">🐦 Twitter</a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Navegación</h4>
            <ul class="footer-links">
              <li><a href="index.html" data-route="index.html">🏠 Inicio</a></li>
              <li><a href="pet_donations_info_page.html" data-route="pet_donations_info_page.html">💝 Donaciones</a></li>
              <li><a href="pet_adoption_info_page.html" data-route="pet_adoption_info_page.html">🏠 Adopción</a></li>
              <li><a href="pet_transit_info_page.html" data-route="pet_transit_info_page.html">🚗 Tránsito</a></li>
              <li><a href="#">📖 Nuestra Historia</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Contacto</h4>
            <ul class="footer-links">
              <li>📧 info@patitasconesperanza.org</li>
              <li>📱 +54 11 1234-5678</li>
              <li>📍 Buenos Aires, Argentina</li>
              <li>🕐 Lun - Vie: 9:00 - 18:00</li>
            </ul>
            <button class="footer-cta-btn" aria-label="Donar ahora">💝 Donar Ahora</button>
            <button class="footer-cta-btn secondary" aria-label="Ser casa de tránsito">🚗 Ser casa de tránsito</button>
            <button class="footer-cta-btn secondary" aria-label="Adoptar un animal">🏠 Adoptar</button>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025 Patitas con Esperanza. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ para los seres de luz</p>
        </div>
      </footer>
    `;

    // Expandir el fondo del footer a ancho completo si el body tiene padding
    const footerEl = mount.querySelector('.footer');
    if (footerEl) {
      const bodyStyles = window.getComputedStyle(document.body);
      const padL = parseFloat(bodyStyles.paddingLeft || '0');
      const padR = parseFloat(bodyStyles.paddingRight || '0');
      if (padL || padR) {
        footerEl.style.marginLeft = `-${padL}px`;
        footerEl.style.marginRight = `-${padR}px`;
      }
    }

    // Navegación programática desde footer
    const navLinks = mount.querySelectorAll('.footer-links a[data-route]');
    navLinks.forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('data-route') || a.getAttribute('href');
        if (window.AppNav && typeof window.AppNav.navigate === 'function') {
          e.preventDefault();
          window.AppNav.navigate(href, { source: 'footer', label: a.textContent.trim() });
        }
      });
    });

    const donateBtn = mount.querySelector('.footer-cta-btn[aria-label="Donar ahora"]');
    const transitBtn = mount.querySelector('.footer-cta-btn[aria-label="Ser casa de tránsito"]');
    const adoptBtn = mount.querySelector('.footer-cta-btn[aria-label="Adoptar un animal"]');
    if (donateBtn) {
      donateBtn.addEventListener('click', (e) => {
        if (window.AppNav) {
          e.preventDefault();
          window.AppNav.navigate('pet_donations_info_page.html', { source: 'footer', action: 'donate_now' });
        }
      });
    }
    if (transitBtn) {
      transitBtn.addEventListener('click', (e) => {
        if (window.AppNav) {
          e.preventDefault();
          window.AppNav.navigate('pet_transit_info_page.html', { source: 'footer', action: 'transit' });
        }
      });
    }
    if (adoptBtn) {
      adoptBtn.addEventListener('click', (e) => {
        if (window.AppNav) {
          e.preventDefault();
          window.AppNav.navigate('pet_adoption_info_page.html', { source: 'footer', action: 'adopt' });
        }
      });
    }
  });
})();