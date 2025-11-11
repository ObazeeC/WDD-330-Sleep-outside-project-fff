// Shared utilities
export function getParam(param) {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
}

export function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}
