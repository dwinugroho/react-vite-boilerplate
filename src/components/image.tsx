import React from 'react'
import {
  LazyLoadImage,
  LazyLoadImageProps
} from 'react-lazy-load-image-component'

import { cn } from '@/lib/utils'

export const Image: React.FC<LazyLoadImageProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setLoading] = React.useState(true)

  return (
    <LazyLoadImage
      className={cn(
        className,
        'bg-gray-400 transition-[scale,filter] duration-700',
        isLoading && 'scale-[1.02] animate-pulse blur-lg grayscale'
      )}
      onLoad={() => setLoading(false)}
      {...props}
    />
  )
}
