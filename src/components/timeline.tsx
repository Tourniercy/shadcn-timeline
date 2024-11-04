import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.LiHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative pl-8 sm:pl-44 py-6 group", className)}
    {...props}
  />
));
TimelineItem.displayName = "TimelineItem";

const TimelineHeader = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute " +
        "before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[10rem] " +
        "before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 " +
        "sm:after:left-0 after:w-2 after:h-2 after:bg-foreground after:border-4 after:box-content " +
        "after:border-primary-foreground/95 after:rounded-full sm:after:ml-[10rem] after:-translate-x-1/2 " +
        "after:translate-y-1.5",
      className,
    )}
    {...props}
  />
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xl font-bold text-primary", className)}
    {...props}
  >
    {children}
  </div>
));
TimelineTitle.displayName = "TimelineTitle";

const TimelineTime = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Badge>
>(({ className, variant = "default", ...props }) => {
  return (
    <Badge
      className={cn(
        "sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3 sm:mb-0",
        className,
      )}
      variant={variant}
      {...props}
    >
      {props.children}
    </Badge>
  );
});
TimelineTime.displayName = "TimelineTime";

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
));
TimelineDescription.displayName = "TimelineDescription";

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
};
