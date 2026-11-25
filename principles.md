# Motion principles

1. **Purposeful:** motion explains a change (where something came from, where it went).
2. **Fast:** most UI transitions sit between 150 and 300ms.
3. **Eased:** use ease-out for entering, ease-in for leaving; never linear for UI.
4. **Consistent:** same type of change, same duration and curve.
5. **Respectful:** honor `prefers-reduced-motion`.

| Use | Duration | Curve |
| --- | --- | --- |
| Hover, press | 120-150ms | ease-out |
| Dropdown, tooltip | 180-220ms | ease-out |
| Modal, sheet | 240-300ms | cubic-bezier(0.2, 0.8, 0.2, 1) |
| Page transition | 300-400ms | cubic-bezier(0.65, 0, 0.35, 1) |
