export default function imageLoader({ src, width, quality }) {
  return `/studio${src}?w=${width}&q=${quality || 75}`
} 