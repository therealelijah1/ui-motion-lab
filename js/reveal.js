// Adds .is-visible to [data-reveal] elements as they enter the viewport.
// Siblings with data-reveal get a small stagger so groups animate in sequence.

const STAGGER_MS = 60;

export function initReveal(root = document) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = [...root.querySelectorAll("[data-reveal]")];

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = [...el.parentElement.querySelectorAll(":scope > [data-reveal]")];
        const index = Math.max(siblings.indexOf(el), 0);
        el.style.transitionDelay = `${index * STAGGER_MS}ms`;
        el.classList.add("is-visible");
        observer.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  items.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}
