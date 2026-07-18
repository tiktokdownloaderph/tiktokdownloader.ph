"use client";
import { useEffect } from "react";

export default function FaqToggle() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const questions = document.querySelectorAll<HTMLElement>(".home-faq .faq-item h3");
    questions.forEach((question) => {
      question.setAttribute("role", "button");
      question.setAttribute("tabindex", "0");
      question.setAttribute("aria-expanded", "false");

      const toggleFaq = () => {
        const item = question.closest(".faq-item") as HTMLElement | null;
        if (!item) return;
        const isOpen = item.classList.toggle("is-open");
        question.setAttribute("aria-expanded", isOpen ? "true" : "false");
      };

      question.addEventListener("click", toggleFaq);
      question.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleFaq();
        }
      });
    });
  }, []);

  return null;
}
