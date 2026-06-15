import { HOURS, getOpenStatus } from '../lib/hoursData';

/**
 * Visual weekly hours table with a live "open now / closed" status line.
 * `compact` renders the grouped 3-row version (Pon-Czw / Pt-Sob / Niedziela)
 * for tight spaces (footer); default renders the full 7-row table.
 * `dark` swaps the palette for use on section-dark (e.g. the footer).
 */
export default function HoursTable({ compact = false, className = '', dark = false }) {
  const { dayIndex, isOpen } = getOpenStatus();
  const mutedText = dark ? 'text-linen/60' : 'text-muted';
  const bodyText = dark ? 'text-linen/80' : 'text-ink/80';

  if (compact) {
    return (
      <dl className={`text-sm ${bodyText} grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 mx-auto w-fit ${className}`}>
        <dt className={mutedText}>Pon&ndash;Czw</dt><dd>12:00&ndash;22:00</dd>
        <dt className={mutedText}>Pt&ndash;Sob</dt><dd>12:00&ndash;23:00</dd>
        <dt className={mutedText}>Niedziela</dt><dd>12:00&ndash;22:00</dd>
      </dl>
    );
  }

  return (
    <div className={`${dark ? 'border border-[var(--dusk-line)] rounded-sm bg-linen/[0.04]' : 'edit-frame'} p-5 sm:p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`font-display text-xl ${dark ? 'text-linen' : 'text-ink'}`}>Godziny otwarcia</h3>
        <span
          className={`label inline-flex items-center gap-2 ${
            isOpen ? (dark ? 'text-sage-light' : 'text-status-open') : (dark ? 'text-linen/55' : 'text-status-closed')
          }`}
          role="status"
        >
          <span
            className={`w-2 h-2 rounded-full ${isOpen ? (dark ? 'bg-sage-light' : 'bg-moss') : (dark ? 'bg-linen/30' : 'bg-ink/30')}`}
            aria-hidden="true"
          />
          {isOpen ? 'Otwarte teraz' : 'Zamknięte teraz'}
        </span>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {HOURS.map((row, i) => (
            <tr
              key={row.day}
              className={`border-t ${dark ? 'border-[var(--dusk-line)]' : 'border-sand'} first:border-t-0 ${
                i === dayIndex ? `font-medium ${dark ? 'text-linen' : 'text-ink'}` : bodyText
              }`}
            >
              <th scope="row" className="text-left font-normal py-2">
                {row.day}
                {i === dayIndex && <span className="sr-only"> (dziś)</span>}
              </th>
              <td className="text-right font-mono py-2">
                {row.open}&ndash;{row.close}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
