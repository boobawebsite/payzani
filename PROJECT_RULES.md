# Payzani Project Design & Architecture Rules

Always enforce these strict design and architecture rules across the entire Payzani project:

1. **NO EMOJI ANYWHERE**:
   - Use clean inline SVG icons only. Never use emoji characters (e.g. no checkmark emojis, fire emojis, arrows, or dots as emojis).

2. **NO GLOW, SHADOW, OR GRADIENTS ANYWHERE**:
   - Zero `box-shadow`, zero `text-shadow`, zero `linear-gradient` or `radial-gradient`.
   - Pure flat styling with solid surfaces, crisp 1px borders, and clear high-contrast typography.

3. **NO VERTICAL HOVER MOVEMENT**:
   - Elements must NOT lift or translate vertically on hover (zero `transform: translateY(...)`).
   - Hover states must only use subtle background color or border color transitions.

4. **FLUID RESPONSIVE SCALING (MOBILE, TABLET, DESKTOP)**:
   - All elements, cards, typography, buttons, and paddings must scale proportionally using fluid CSS (`clamp()`, fluid percentages).
   - On small phone screens, nothing must be squeezed or compressed; dimensions scale down smoothly.

5. **ZERO NATIVE `<select>` ELEMENTS**:
   - Replace every native `<select>` with a **Custom Modular Picker**:
     - **Desktop**: Centered Custom Modular Dialog.
     - **Mobile**: Bottom Sheet Modal / Action Sheet.

6. **NO NATIVE JS `alert()`, `confirm()`, OR `prompt()`**:
   - All user alerts and confirmations must use Custom Modular Dialogs or Action Sheets.

7. **NO NATIVE BROWSER PICKERS**:
   - All date, payment, or selection pickers must be custom modular UI components.
