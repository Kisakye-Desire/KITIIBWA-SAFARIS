export const CONTACT_EMAIL = 'info@kitiibwasafaris.com'

/**
 * Builds a Gmail "compose" URL that opens a pre-filled message to our inbox.
 *
 * A plain `mailto:` link only works on devices that have a default mail client
 * configured — that is why it works on phones but silently does nothing on many
 * desktops. Opening Gmail's web composer in a new tab reliably takes the visitor
 * straight to a message addressed to us on both desktop and mobile.
 */
export function composeEmailUrl({
  to = CONTACT_EMAIL,
  subject = '',
  body = '',
}: {
  to?: string
  subject?: string
  body?: string
} = {}): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject,
    body,
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}
