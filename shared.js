// Contacto: completa WHATSAPP con tu número (solo dígitos, con código de país) para activar el botón.
const WHATSAPP = "";
const EMAIL = "holiber17@gmail.com";
document.querySelectorAll("[data-year]").forEach(e => e.textContent = new Date().getFullYear());
const f = document.getElementById("f");
if (f) f.addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(f);
  const txt = `Hola Oliver, soy ${d.get("name")}. Necesito: ${d.get("need")}.\n\n${d.get("msg") || ""}`;
  if (WHATSAPP) location.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`;
  else location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Proyecto web: " + d.get("need"))}&body=${encodeURIComponent(txt)}`;
});
document.querySelectorAll(".svc button").forEach(b => b.addEventListener("click", () => {
  const o = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", !o);
}));

// Testimonios: agrega aquí solo opiniones reales de clientes. Mientras la lista esté vacía, la sección no se muestra.
// Ejemplo: { texto: "Frase del cliente.", nombre: "Nombre", negocio: "Nombre del negocio" }
const TESTIMONIOS = [];
const op = document.getElementById("opiniones"), lista = document.getElementById("lista-opiniones");
if (op && lista && TESTIMONIOS.length) {
  TESTIMONIOS.forEach(t => {
    const f = document.createElement("figure");
    const q = document.createElement("blockquote"); q.textContent = t.texto;
    const c = document.createElement("figcaption"); c.textContent = `${t.nombre} · ${t.negocio}`;
    f.append(q, c); lista.append(f);
  });
  op.hidden = false;
}
