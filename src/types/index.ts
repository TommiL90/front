import type { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}


export type ToDoResponse = {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: number[]
  completedAt: number[] | null
}

export type ProfileResponse = {
  id: string
  username: string
  name: string
  createdAt: number[]
}