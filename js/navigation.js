(() => {
  const NAV_KEY = 'navState';

  function setState(state) {
    try {
      const payload = { ...state, ts: Date.now() };
      sessionStorage.setItem(NAV_KEY, JSON.stringify(payload));
    } catch {}
  }

  function getState() {
    try {
      const raw = sessionStorage.getItem(NAV_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  function navigate(path, state = {}) {
    setState(state);
    // Para evitar bucles, no redirigimos automáticamente en load; solo en interacción
    window.location.href = path;
  }

  function onReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(() => {
    // Exponer API global
    window.AppNav = { navigate, getState };
  });
})();