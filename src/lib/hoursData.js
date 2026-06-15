// Single source of truth for opening hours — referenced by HoursTable
// (used on Home "Find us", Contact, and Footer) so all displays stay in sync.
export const HOURS = [
  { day: 'Poniedziałek', short: 'Pon', open: '12:00', close: '22:00' },
  { day: 'Wtorek', short: 'Wt', open: '12:00', close: '22:00' },
  { day: 'Środa', short: 'Śr', open: '12:00', close: '22:00' },
  { day: 'Czwartek', short: 'Czw', open: '12:00', close: '22:00' },
  { day: 'Piątek', short: 'Pt', open: '12:00', close: '23:00' },
  { day: 'Sobota', short: 'Sob', open: '12:00', close: '23:00' },
  { day: 'Niedziela', short: 'Niedz', open: '12:00', close: '22:00' },
];

// Grouped ranges for compact display (e.g. footer, hero badge)
export const HOURS_GROUPS = [
  { label: 'Pon–Czw', value: '12:00–22:00' },
  { label: 'Pt–Sob', value: '12:00–23:00' },
  { label: 'Niedziela', value: '12:00–22:00' },
];

/**
 * Returns { dayIndex, isOpen, today } for "currently open/closed" badges.
 * dayIndex: 0 = Monday ... 6 = Sunday, matching HOURS order.
 */
export function getOpenStatus(now = new Date()) {
  const jsDay = now.getDay(); // 0 = Sunday
  const dayIndex = jsDay === 0 ? 6 : jsDay - 1;
  const today = HOURS[dayIndex];
  const minutes = now.getHours() * 60 + now.getMinutes();
  const [openH, openM] = today.open.split(':').map(Number);
  const [closeH, closeM] = today.close.split(':').map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;
  const isOpen = minutes >= openMinutes && minutes < closeMinutes;
  return { dayIndex, isOpen, today };
}
