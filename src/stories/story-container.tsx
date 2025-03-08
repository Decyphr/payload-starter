import { cn } from "~/utilities/ui";

export function StoryContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-h-screen flex justify-center container mx-auto", className)}>
      {children}
    </div>
  );
}
