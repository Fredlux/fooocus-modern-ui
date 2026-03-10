import * as React from "react"

interface TabsProps {
  value: string
  onValueChange: (value: string) => void
  className?: string
  children: React.ReactNode
}

const Tabs = ({ value, onValueChange, className = "", children }: TabsProps) => {
  return (
    <div className={`w-full ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TabsList) {
          return React.cloneElement(child as React.ReactElement, { value, onValueChange })
        }
        return child
      })}
    </div>
  )
}

interface TabsListProps {
  value: string
  onValueChange: (value: string) => void
  className?: string
  children: React.ReactNode
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ value, onValueChange, className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md bg-secondary p-1 text-secondary-foreground ${className}`}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === TabsTrigger) {
            const isActive = (child.props as any).value === value
            return React.cloneElement(child as React.ReactElement, {
              isActive,
              onClick: () => onValueChange((child.props as any).value),
            })
          }
          return child
        })}
      </div>
    )
  }
)
TabsList.displayName = "TabsList"

interface TabsTriggerProps {
  value: string
  isActive?: boolean
  className?: string
  children: React.ReactNode
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, isActive, className = "", children }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? "bg-background text-foreground shadow-sm" : "text-secondary-foreground hover:text-foreground"}`}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

interface TabsContentProps {
  value: string
  className?: string
  children: React.ReactNode
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={`mt-2 rounded-md border border-border bg-card p-4 ${className}`}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
