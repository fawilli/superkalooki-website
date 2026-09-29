type Props = {
  className?: string
}

/** Android robot mark — compatibility icon, not a Play Store badge. */
export function AndroidMark({className = 'size-5'}: Props) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M7.1 4.4 5.4 1.7h1.7l1.4 2.2A7 7 0 0 1 12 3.2c1 0 1.9.2 2.7.6l1.4-2.1h1.7L16.2 4.4A7.4 7.4 0 0 1 19.2 10v.8H4.8V10c0-2.2.9-4.2 2.3-5.6ZM7.95 7.15a1.15 1.15 0 1 0 2.3 0 1.15 1.15 0 1 0-2.3 0Zm5.8 0a1.15 1.15 0 1 0 2.3 0 1.15 1.15 0 1 0-2.3 0Z"
        fillRule="evenodd"
      />
      <path d="M4.2 11.6h15.6v5.6c0 1.2-1 2.2-2.2 2.2H6.4c-1.2 0-2.2-1-2.2-2.2v-5.6Z" />
      <path d="M2.2 12.4h2v3.8h-2a1 1 0 0 1-1-1v-1.8a1 1 0 0 1 1-1Zm17.6 0h2a1 1 0 0 1 1 1v1.8a1 1 0 0 1-1 1h-2v-3.8Z" />
      <path d="M7.2 19.6h2.3v2.6c0 .5-.4.8-.9.8h-.6c-.5 0-.8-.3-.8-.8v-2.6Zm7.3 0h2.3v2.6c0 .5-.3.8-.8.8h-.6c-.5 0-.9-.3-.9-.8v-2.6Z" />
    </svg>
  )
}
