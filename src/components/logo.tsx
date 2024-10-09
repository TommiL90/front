import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import type { IconSvgProps } from '@/types'

/**
 * Component for rendering a logo.
 * @param props - The icon SVG props.
 * @returns The logo SVG component.
 */

const logoVariants = cva('pointer-events-none', {
  variants: {
    size: {
      sm: 'h-8 w-28',
      default: 'h-14 w-48',
      lg: 'h-20 w-68',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface LogoProps
  extends Omit<IconSvgProps, 'size'>,
    VariantProps<typeof logoVariants> {}

export const Logo = ({ className, size, ...props }: LogoProps) => {
  return (
    <svg
      width="150"
      height="102"
      viewBox="0 0 150 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Do it"
      className={cn(logoVariants({ size, className }), 'pointer-events-none -mx-4')}
      {...props}
    >
      <title>Logo Do it</title>
      <path
        d="M0 16.5746C0 7.4207 7.4207 0 16.5746 0H83.7017C92.8555 0 100.276 7.4207 100.276 16.5746V85.3591C100.276 94.513 92.8555 101.934 83.7017 101.934H16.5746C7.4207 101.934 0 94.513 0 85.3591V16.5746Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M83.7017 4.14365H16.5746C9.70917 4.14365 4.14365 9.70917 4.14365 16.5746V85.3591C4.14365 92.2245 9.70917 97.7901 16.5746 97.7901H83.7017C90.5671 97.7901 96.1326 92.2245 96.1326 85.3591V16.5746C96.1326 9.70917 90.5671 4.14365 83.7017 4.14365ZM16.5746 0C7.42069 0 0 7.4207 0 16.5746V85.3591C0 94.513 7.4207 101.934 16.5746 101.934H83.7017C92.8555 101.934 100.276 94.513 100.276 85.3591V16.5746C100.276 7.42069 92.8555 0 83.7017 0H16.5746Z"
        fill="white"
      />
      <path
        d="M14.1531 75.4144V28.2804H28.6558C32.7995 28.2804 36.5007 29.2192 39.7595 31.0968C43.0399 32.9528 45.5973 35.6073 47.4317 39.0603C49.2662 42.4918 50.1834 46.398 50.1834 50.7791V52.948C50.1834 57.3291 49.277 61.2245 47.4641 64.6344C45.6728 68.0443 43.137 70.688 39.8566 72.5656C36.5762 74.4432 32.875 75.3928 28.753 75.4144H14.1531ZM23.8647 36.1468V67.6126H28.5587C32.3571 67.6126 35.2598 66.3717 37.2669 63.8898C39.2739 61.408 40.2991 57.8578 40.3422 53.2394V50.7467C40.3422 45.9556 39.3495 42.3299 37.364 39.8696C35.3785 37.3878 32.4758 36.1468 28.6558 36.1468H23.8647Z"
        fill="#8615DF"
      />
      <path
        d="M86.0453 52.9157C86.0453 57.5557 85.2252 61.6238 83.5851 65.12C81.9449 68.6162 79.5925 71.3139 76.5279 73.213C73.4849 75.1122 69.9887 76.0618 66.0393 76.0618C62.133 76.0618 58.6476 75.123 55.5831 73.2454C52.5185 71.3678 50.1445 68.6917 48.4612 65.2171C46.7778 61.7209 45.9253 57.7067 45.9038 53.1746V50.8438C45.9038 46.2038 46.7347 42.1249 48.3964 38.6071C50.0798 35.0678 52.443 32.3593 55.486 30.4817C58.5505 28.5825 62.0467 27.6329 65.9746 27.6329C69.9024 27.6329 73.3878 28.5825 76.4308 30.4817C79.4954 32.3593 81.8585 35.0678 83.5203 38.6071C85.2037 42.1249 86.0453 46.193 86.0453 50.8115V52.9157ZM76.2042 50.7791C76.2042 45.8369 75.3193 42.0817 73.5497 39.5135C71.78 36.9453 69.2549 35.6612 65.9746 35.6612C62.7157 35.6612 60.2015 36.9346 58.4318 39.4812C56.6621 42.0062 55.7665 45.7182 55.7449 50.6172V52.9157C55.7449 57.7283 56.6298 61.4619 58.3994 64.1164C60.1691 66.771 62.7157 68.0982 66.0393 68.0982C69.2981 68.0982 71.8016 66.8249 73.5497 64.2783C75.2978 61.7101 76.1826 57.9765 76.2042 53.0775V50.7791Z"
        fill="#8615DF"
      />
      <path
        d="M112.678 46.2988V48.9047H118.634V61.2224H112.678V63.8121H127.343V61.2224H121.629V46.2988H112.678ZM118.246 41.7019C118.246 42.1875 118.392 42.5921 118.683 42.9159C118.985 43.2396 119.438 43.4015 120.043 43.4015C120.636 43.4015 121.084 43.2396 121.386 42.9159C121.688 42.5921 121.839 42.1875 121.839 41.7019C121.839 41.4321 121.796 41.184 121.71 40.9573C121.624 40.7307 121.494 40.5419 121.321 40.3908C121.181 40.2506 121.003 40.1426 120.787 40.0671C120.571 39.9808 120.323 39.9376 120.043 39.9376C119.762 39.9376 119.509 39.9808 119.282 40.0671C119.066 40.1426 118.888 40.2506 118.748 40.3908C118.575 40.5527 118.446 40.7469 118.359 40.9735C118.284 41.2001 118.246 41.4429 118.246 41.7019Z"
        fill="white"
      />
      <path
        d="M139.207 42.058H136.196V46.2988H131.6V48.6134H136.196V58.1308C136.196 59.2099 136.337 60.1325 136.617 60.8986C136.909 61.654 137.302 62.2691 137.799 62.7439C138.295 63.2294 138.878 63.5855 139.547 63.8121C140.227 64.028 140.955 64.1359 141.732 64.1359C142.196 64.1359 142.66 64.1143 143.124 64.0711C143.599 64.028 144.047 63.9632 144.468 63.8769C144.888 63.8014 145.277 63.7096 145.633 63.6017C145.989 63.483 146.291 63.3481 146.539 63.1971L146.118 61.0767C145.935 61.1199 145.698 61.1738 145.406 61.2386C145.126 61.2925 144.824 61.3465 144.5 61.4004C144.165 61.4544 143.825 61.5029 143.48 61.5461C143.135 61.5785 142.8 61.5946 142.477 61.5946C142.034 61.5946 141.613 61.5407 141.214 61.4328C140.826 61.3249 140.48 61.136 140.178 60.8663C139.876 60.6073 139.639 60.2566 139.466 59.8142C139.293 59.3718 139.207 58.8106 139.207 58.1308V48.6134H145.876V46.2988H139.207V42.058Z"
        fill="white"
      />
      <path
        d="M122.652 75.8287C122.652 77.8884 120.982 79.558 118.923 79.558C116.863 79.558 115.193 77.8884 115.193 75.8287C115.193 73.7691 116.863 72.0994 118.923 72.0994C120.982 72.0994 122.652 73.7691 122.652 75.8287Z"
        fill="white"
      />
      <path
        d="M145.028 75.8287C145.028 77.8884 143.358 79.558 141.298 79.558C139.239 79.558 137.569 77.8884 137.569 75.8287C137.569 73.7691 139.239 72.0994 141.298 72.0994C143.358 72.0994 145.028 73.7691 145.028 75.8287Z"
        fill="white"
      />
    </svg>
  )
}
