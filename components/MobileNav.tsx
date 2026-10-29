"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function MobileNav({ brand, children }: { brand: ReactNode; children: ReactNode }) {
  const shellRef = useRef<HTMLDetailsElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu(restoreFocus = true) {
    if (shellRef.current) shellRef.current.open = false;
    setOpen(false);
    if (restoreFocus) shellRef.current?.querySelector("summary")?.focus();
  }

  useEffect(() => {
    if (shellRef.current) shellRef.current.open = false;
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
      if (event.key !== "Tab") return;
      const controls = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 1200px)");
    function onDesktop(event: MediaQueryListEvent) {
      if (event.matches) closeMenu(false);
    }
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <details ref={shellRef} className="mobile-nav-shell d-md-none" onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary aria-label="Buksan ang menu" aria-controls="mobile-nav-panel" aria-expanded={open} className="btn btn-primary d-flex justify-content-center align-items-center mobile-nav-trigger">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </summary>
      <button type="button" className="mobile-nav-backdrop" aria-label="Isara ang menu" tabIndex={-1} onClick={() => closeMenu()} />
      <div ref={panelRef} id="mobile-nav-panel" className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Menu" onClickCapture={(event) => {
        if ((event.target as Element).closest("a[href]") && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) closeMenu(false);
      }}>
        <div className="offcanvas-header mobile-nav-header">
          {brand}
          <button ref={closeRef} type="button" className="mobile-nav-close" aria-label="Isara ang menu" title="Isara ang menu" onClick={() => closeMenu()}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </details>
  );
}
