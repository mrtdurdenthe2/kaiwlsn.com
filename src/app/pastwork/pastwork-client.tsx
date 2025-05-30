'use client';

import { MorphingDialogBasic } from '@/components/dialoguebasic';
import { InView } from '@/components/ui/inview';
import { motion } from 'motion/react';

// Define a type for the 'meta' prop based on pastWorkMetadata structure
// Assuming pastWorkMetadata items look like: { filename?: string, title?: string, subtitle?: string, description?: string }
type MetaProps = {
  filename?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  /** Optional order to control display sequence; lower numbers display first */
  order?: number;
  // Add other properties if meta has them based on your actual pastWorkMetadata structure
};

// Define a type for the 'enriched' data items
type EnrichedImage = {
  src: string;
  meta?: MetaProps; // meta can be undefined if not found
};

type PastWorkClientProps = {
  enrichedImages: readonly EnrichedImage[];
};

export function PastWorkClient({ enrichedImages }: PastWorkClientProps) {
  return (
    <main className="container mx-auto p-4">
      {enrichedImages.length > 0 ? (
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 justify-items-center">
            {enrichedImages.map(({ src, meta }) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                  visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
                }}
                key={src}
                className="w-full h-full" // Ensure motion.div takes full space
              >
                <MorphingDialogBasic
                  src={src}
                  alt={meta?.title || 'Past work image'}
                  title={meta?.title}
                  subtitle={meta?.subtitle}
                  description={meta?.description}
                />
              </motion.div>
            ))}
          </div>
        </InView>
      ) : (
        <p>Couldnt load work. Please contact me about this issue.</p>
      )}
    </main>
  );
}
