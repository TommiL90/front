import { appConfig } from '@/config/app'
import { Icons } from './icons'

export function Logo() {
  return (
    <>
      <Icons.logo className="w-6 h-6" />
      <span className="font-bold">{appConfig.name}</span>
    </>
  )
}
