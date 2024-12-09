import type { RefObject } from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  ref: RefObject<HTMLDivElement>
}

export const Container = ({ children, ref, ...other }: ContainerProps) => {
  return (
    <div
      style={{
        maxWidth: '80%',
        margin: '0 auto',
        border: '1px solid var(--border)',
        borderRadius: '5px',
        padding: '2em',
      }}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  )
}

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        maxWidth: '100vw',
        padding: '2em',
      }}
    >
      {children}
    </div>
  )
}

Container.displayName = 'Container'
MainContainer.displayName = 'MainContainer'
