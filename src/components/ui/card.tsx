import * as React from "react"

interface CardProps {
  className?: string
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl border border-border bg-card text-card-foreground shadow-sm ${className}`}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col space-y-1.5 p-6 ${className}`}
      >
        {children}
      </div>
    )
  }
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, CardProps>(
  ({ className = "", children }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      >
        {children}
      </h3>
    )
  }
)
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={`p-6 pt-0 ${className}`}
      >
        {children}
      </div>
    )
  }
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center p-6 pt-0 ${className}`}
      >
        {children}
      </div>
    )
  }
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardContent }
