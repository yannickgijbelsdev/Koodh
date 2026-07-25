// Simple, working cookie-consent store persisted in localStorage.
const KEY = "koodh_cookie_consent_v1";

export const defaultConsent = {
  necessary: true, // always on
  analytics: false,
  marketing: false,
};

export function getConsent() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { ...defaultConsent, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function saveConsent(consent) {
  const value = {
    ...defaultConsent,
    ...consent,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch (e) {}
  // Let the rest of the app react to consent changes.
  window.dispatchEvent(new CustomEvent("koodh:consent-changed", { detail: value }));
  return value;
}

export function acceptAll() {
  return saveConsent({ analytics: true, marketing: true });
}

export function declineAll() {
  return saveConsent({ analytics: false, marketing: false });
}

// Allow any component (e.g. footer link) to reopen the preferences panel.
export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent("koodh:open-cookie-preferences"));
}
