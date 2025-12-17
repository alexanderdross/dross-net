"use client"

interface OptimizedImageProps {
  src: string
  alt: string
  title: string
  width: number
  height: number
  loading?: "lazy" | "eager"
  priority?: boolean
  className?: string
}

export function OptimizedImage({
  src,
  alt,
  title,
  width,
  height,
  loading = "lazy",
  priority = false,
  className = "",
}: OptimizedImageProps) {
  return (
    <picture>
      {/* Large screens - load large images */}
      <source type="image/webp" srcSet={`${src}-lg.webp`} media="(min-width: 1024px)" />
      <source type="image/jpeg" srcSet={`${src}-lg.jpg`} media="(min-width: 1024px)" />

      {/* Medium screens - load medium images */}
      <source type="image/webp" srcSet={`${src}-md.webp`} media="(min-width: 640px)" />
      <source type="image/jpeg" srcSet={`${src}-md.jpg`} media="(min-width: 640px)" />

      {/* Small screens - load small images */}
      <source type="image/webp" srcSet={`${src}-sm.webp`} />
      <source type="image/jpeg" srcSet={`${src}-sm.jpg`} />

      {/* Fallback image */}
      <img
        src={`${src}-md.jpg`}
        alt={alt}
        title={title}
        width={width}
        height={height}
        loading={priority ? "eager" : loading}
        className={className}
      />
    </picture>
  )
}

export default OptimizedImage
