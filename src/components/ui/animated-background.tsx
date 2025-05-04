'use client';
import { cn } from '@/lib/utils';
import { LayoutGroup, Transition, motion } from 'motion/react';
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useRef,
  useId,
} from 'react';

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ 'data-id': string }>[]
    | ReactElement<{ 'data-id': string }>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const uniqueId = useId();

  // Create refs and handlers to delay hover leave and prevent flicker
  const hoverTimeout = useRef<number | undefined>(undefined);
  // Persist the clicked ID as default when hover ends
  const [persistentId, setPersistentId] = useState<string | null>(defaultValue ?? null);
  const handleHoverEnter = (id: string) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = undefined;
    }
    handleSetActiveId(id);
  };
  const handleHoverLeave = () => {
    hoverTimeout.current = window.setTimeout(() => {
      handleSetActiveId(persistentId);
    }, 100);
  };

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);

    if (onValueChange) {
      onValueChange(id);
    }
  };

  // Sync persistentId and activeId when defaultValue (routing) changes
  useEffect(() => {
    if (defaultValue !== undefined) {
      setPersistentId(defaultValue);
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  return (
    <LayoutGroup>
      <div
        className="relative"
        onMouseLeave={enableHover ? handleHoverLeave : undefined}
      >
        {Children.map(children, (child: any, index) => {
          const id = child.props['data-id'];
          // Update both persistent and active ID on click when hover-enabled
          const handleClick = (id: string) => {
            setPersistentId(id);
            handleSetActiveId(id);
          };
          const eventProps = enableHover
            ? { onMouseEnter: () => handleHoverEnter(id), onClick: () => handleClick(id) }
            : { onClick: () => handleSetActiveId(id) };

          return cloneElement(
            child,
            {
              key: index,
              className: cn('relative inline-flex', child.props.className),
              'data-checked': activeId === id ? 'true' : 'false',
              ...eventProps,
            },
            <>
              {activeId === id && (
                <motion.div
                  layoutId={`background-${uniqueId}`}
                  layout
                  className={cn('absolute inset-0 pointer-events-none', className)}
                  transition={transition}
                />
              )}
              <div className='z-10'>{child.props.children}</div>
            </>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
