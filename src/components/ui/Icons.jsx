function SvgIcon({ children, className = "size-5", viewBox = "0 0 24 24" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function CartLogo({ className = "size-8" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 6h5.2l3.8 19h23.2l4.6-14.4H11.2" />
      <path d="M14.8 25h21.4" />
      <circle cx="18" cy="32.5" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="33" cy="32.5" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SearchIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4.5 4.5" />
    </SvgIcon>
  );
}

export function ChevronDownIcon({ className = "size-4" }) {
  return (
    <SvgIcon className={className}>
      <path d="m6 9 6 6 6-6" />
    </SvgIcon>
  );
}

export function InstagramIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </SvgIcon>
  );
}

export function FacebookIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <path
        d="M13.6 21v-7h2.5l.4-2.9h-2.9V9.3c0-.8.2-1.4 1.5-1.4h1.5V5.4c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2h-2.6V14h2.6v7h3.3Z"
        fill="currentColor"
        stroke="none"
      />
    </SvgIcon>
  );
}

export function TelegramIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <path d="M21 4 3.6 10.7l5.2 1.9L21 4Z" />
      <path d="m8.8 12.6-1 5.4 3.3-3.6 6.4 4.3L21 4" />
    </SvgIcon>
  );
}

export function ListIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <path d="M4 6h.01M4 12h.01M4 18h.01" strokeWidth="3" />
      <path d="M9 6h11M9 12h11M9 18h11" />
    </SvgIcon>
  );
}

export function UserIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </SvgIcon>
  );
}

export function HeartIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <path d="M12 20.5s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 3.3c0 5-7.5 9.6-7.5 9.6Z" />
    </SvgIcon>
  );
}

export function BagIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </SvgIcon>
  );
}

export function TagIcon({ className = "size-5" }) {
  return (
    <SvgIcon className={className}>
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
      <circle cx="7" cy="7" r="1.3" />
    </SvgIcon>
  );
}
