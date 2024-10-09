import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const titleVariants = cva('bg-clip-text font-semibold', {
  variants: {
    size: {
      xs: 'text-base md:text-lg',
      sm: 'text-xl lg:text-2xl',
      md: 'text-2xl md:text-3xl',
      lg: 'text-4xl lg:text-5xl leading-9',
    },
    lineLeft: {
      true: 'border-l-8 border-secondary pl-2',
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  defaultVariants: {
    size: 'md',
    lineLeft: false,
  },
})

const subtitle = cva(
  'my-2 text-sm font-medium md:text-lg',
  {
    variants: {
      fullWidth: {
        true: '!w-full',
      },
    },
    defaultVariants: {
      fullWidth: true,
    },
  }
)

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  as?: HeadingTag
  lineBottom?: boolean
  lineColor?: 'primary' | 'secondary'
}

/**
 * Renders a heading element with optional styling and a bottom line.
 *
 * @component
 * @example
 * ```tsx
 * <Heading tag="h1" size="xl" lineLeft className="text-red-500">
 *   Hello, World!
 * </Heading>
 * ```
 *
 * @param {object} props - The component props.
 * @param {string} [props.tag='h2'] - The HTML tag to use for the heading.
 * @param {string} [props.size] - The size of the heading.
 * @param {boolean} [props.lineLeft] - Whether to display a line on the left side of the heading.
 * @param {boolean} [props.lineBottom=false] - Whether to display a line at the bottom of the heading.
 * @param {string} [props.className] - Additional CSS classes to apply to the heading.
 * @param {React.Ref<HTMLHeadingElement>} ref - The ref to attach to the heading element.
 * @returns {React.ReactElement} The rendered heading component.
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as = 'h2',
      size = 'md',
      lineLeft,
      lineBottom = false,
      lineColor,
      className,
      ...props
    },
    ref
  ) => {
    const Component = as
    return (
      <div
        aria-level={1}
        className={cn(
          'relative max-w-max text-center font-semibold leading-relaxed tracking-tighter md:tracking-tight',
          className
        )}
      >
        <Component
          className={cn(titleVariants({ lineLeft, size }))}
          ref={ref}
          {...props}
        />
        {lineBottom && (
          <div
            className={cn(
              size === 'xs' ? 'w-8' : 'w-12',
              lineColor === 'secondary' ? 'border-secondary' : 'border-primary',
              'absolute bottom-0 left-0 border-b-4 pb-2'
            )}
            data-testid="lineBottom"
          />
        )}
      </div>
    )
  }
)
Heading.displayName = 'Heading'

export { Heading, titleVariants, subtitle }
