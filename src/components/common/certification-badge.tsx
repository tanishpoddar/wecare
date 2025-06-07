import type { LucideIcon } from 'lucide-react';

interface CertificationBadgeProps {
  Icon: LucideIcon;
  label: string;
  className?: string;
}

export function CertificationBadge({ Icon, label, className }: CertificationBadgeProps) {
  return (
    <div className={`flex flex-col items-center text-center p-4 rounded-lg bg-secondary/30 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-2" />
      <span className="text-xs md:text-sm text-foreground font-medium">{label}</span>
    </div>
  );
}
