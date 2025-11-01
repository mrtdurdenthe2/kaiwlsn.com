export type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const baseStrokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function PlusIcon({ size = 16, strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      {...baseStrokeProps}
      strokeWidth={strokeWidth}
    >
      <path d="M8 3.25v9.5" />
      <path d="M3.25 8h9.5" />
    </svg>
  );
}

export function XMarkIcon({ size = 16, strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      {...baseStrokeProps}
      strokeWidth={strokeWidth}
    >
      <path d="m4.25 4.25 7.5 7.5" />
      <path d="m11.75 4.25-7.5 7.5" />
    </svg>
  );
}

export function CopyIcon({ size = 16, strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      {...baseStrokeProps}
      strokeWidth={strokeWidth}
    >
      <path d="M6 5.5h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
      <path d="M4.75 10.5h-1.5A1.25 1.25 0 0 1 2 9.25v-5.5A1.25 1.25 0 0 1 3.25 2.5h5.5A1.25 1.25 0 0 1 10 3.75v1.5" />
    </svg>
  );
}

export function CheckIcon({ size = 16, strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      {...baseStrokeProps}
      strokeWidth={strokeWidth}
    >
      <path d="m3.5 8.5 2.75 2.75L12.5 5" />
    </svg>
  );
}

export function ArrowTopRightIcon({
  size = 16,
  strokeWidth = 1.5,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      {...baseStrokeProps}
      strokeWidth={strokeWidth}
    >
      <path d="m4.5 11.5 7-7" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}
