'use client';

import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
  } from '@/components/ui/morphing-dialog';
  import { PlusIcon } from 'lucide-react';
  import type { ReactNode } from 'react';

  export interface MorphingDialogBasicProps {
    /** Image URL relative to the public folder, e.g. `/pastwork/image01.png` */
    src: string;
    /** Accessible alt text for the image */
    alt?: string;
    /** Optional title displayed inside the dialog */
    title?: string;
    /** Optional subtitle displayed below the title */
    subtitle?: string;
    /** Optional rich description displayed inside the dialog */
    description?: ReactNode;
  }

  /**
   * A reusable MorphingDialog that presents an image as the trigger and a larger view inside the dialog.
   * Accepts props so it can be reused for any image.
   */
  export function MorphingDialogBasic({
    src,
    alt = 'Past work image',
    title,
    subtitle,
    description,
  }: MorphingDialogBasicProps) {
    return (
      <MorphingDialog
        transition={{
          type: 'ease-in-out',
          duration: 0.13,
        }}
      >
        <MorphingDialogTrigger
          style={{
            borderRadius: '12px',
            width: '600px',
            height: '400px',
          }}
          className='relative overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
        >
          <MorphingDialogImage
            src={src}
            alt={alt}
            className='w-full h-full object-cover'
          />
          {(title || subtitle) && (
            <div className='absolute inset-0 flex flex-col justify-end p-3 space-y-0 opacity-0 pointer-events-none'>
              {title && (
                <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                  {title}
                </MorphingDialogTitle>
              )}
              {subtitle && (
                <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                  {subtitle}
                </MorphingDialogSubtitle>
              )}
            </div>
          )}
          <div
            className='absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-hidden='true'
          >
            <PlusIcon size={12} />
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent
            style={{
              borderRadius: '24px',
              width: '800px',
            }}
            className='pointer-events-auto relative flex h-auto flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
          >
            <MorphingDialogImage
              src={src}
              alt={alt}
              className='w-full h-auto object-contain'
            />
            <div className='p-6'>
              {title && (
                <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                  {title}
                </MorphingDialogTitle>
              )}
              {subtitle && (
                <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                  {subtitle}
                </MorphingDialogSubtitle>
              )}
              {description && (
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100, filter: 'blur(14px)' },
                    animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
                    exit: { opacity: 0, scale: 0.8, y: 100, filter: 'blur(14px)' },
                  }}
                >
                  {description}
                </MorphingDialogDescription>
              )}
            </div>
            <MorphingDialogClose className='text-zinc-50' />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    );
  }

  // Backwards compatibility export. Will be removed in future refactors.
  export const MorphingDialogBasicOne = MorphingDialogBasic;
