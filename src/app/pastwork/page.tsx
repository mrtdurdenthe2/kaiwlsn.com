import fs from 'fs/promises';
import path from 'path';
import { MorphingDialogBasic } from '@/components/dialoguebasic';
import { pastWorkMetadata } from './workMetadata';

export default async function Page() {
  const publicDir = path.join(process.cwd(), 'public', 'pastwork');
  let images: string[] = [];
  try {
    const files = await fs.readdir(publicDir);
    images = files
      .filter((file) => /\.(jpe?g|png|gif|webp|avif)$/i.test(file))
      .map((file) => `/pastwork/${file}`);
  } catch (error) {
    console.error('Error reading pastwork images:', error);
  }

  // merge images with metadata
  const enriched = images.map((src) => {
    const filename = src.split('/').pop() ?? '';
    const meta = pastWorkMetadata.find((m) => m.filename === filename);
    return { src, meta } as const;
  });

  return (
    <main className="container mx-auto p-4">
      {enriched.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 justify-items-center">
          {enriched.map(({ src, meta }) => (
            <MorphingDialogBasic
              key={src}
              src={src}
              alt={meta?.title || 'Past work image'}
              title={meta?.title}
              subtitle={meta?.subtitle}
              description={meta?.description}
            />
          ))}
        </div>
      ) : (
        <p>Couldnt load work. Please contact me about this issue.</p>
      )}
    </main>
  );
}
