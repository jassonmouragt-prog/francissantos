# Plan - Adding Agenda, Contact Form, and Store Sections

I will add three new sections to the Francis Santos website: a dynamic Agenda (calendar-like), a Contact/Invitation form that redirects to WhatsApp, and a Store placeholder. All sections will follow the existing "liquid glass" aesthetic with gold accents.

## User Review Required

> [!IMPORTANT]
> The contact form will send information to WhatsApp (+55 98 99173-8473). I'll implement a clean form that constructs the message automatically for the user to send.

## Proposed Changes

### 1. Agenda Section
- Create a new `Agenda` section after the Biography.
- Implement a list-based view that looks like a modern calendar/schedule.
- Add a "Empty state" message: "No momento a agenda não tem nenhum show, mas vou atualizando quando aparecer algum convite."
- Use the `glass` and `gold` styling for the date cards.

### 2. Contact/Invitation Section
- Create a "Convite / Contato" section.
- Build a form with:
    - State selector (UF).
    - Event type field.
    - Description/Details textarea.
    - Submit button that formats a WhatsApp message.
- Style with `glass` inputs and gold glow on focus.

### 3. Artist Store Section
- Add a "Loja Oficial" section.
- Display a "Em breve" message with a descriptive subtext about products being in development.
- Style it as a placeholder card with a subtle pulse or glow effect to maintain visual interest.

### 4. Integration
- Update `src/routes/index.tsx` to include these new components/sections.
- Ensure responsive behavior (mobile-friendly layout).

## Technical Details

- **WhatsApp Integration**: Use `window.open(`https://wa.me/5598991738473?text=${encodeURIComponent(message)}`)`.
- **Form Handling**: Use standard React state for the form inputs.
- **Styling**: Reuse Tailwind classes like `glass`, `btn-gold`, and `SectionTitle` component.
- **Iconography**: Use `Calendar`, `Send`, `ShoppingBag`, and `MapPin` from `lucide-react`.

---

*Note: The "Edit with Lovable" badge is already hidden via CSS from the previous turn.*
