import fs from 'fs/promises';
import path from 'path';
import { pastWorkMetadata } from './workMetadata';
import { PastWorkClient } from './pastwork-client';

// Define a type for the 'meta' prop based on pastWorkMetadata structure
// This should match or be compatible with MetaProps in pastwork-client.tsx
type MetaProps = {
  filename?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  /** Optional order to control display sequence; lower numbers display first */
  order?: number;
  // Add other properties if meta has them
};

// Define a type for the 'enriched' data items
// This should match or be compatible with EnrichedImage in pastwork-client.tsx
type EnrichedImage = {
  src: string;
  meta?: MetaProps; // meta can be undefined if not found
};

export default async function Page() {
  const publicDir = path.join(process.cwd(), 'public', 'pastwork');
  let images: string[] = [];
  try {
    const files = await fs.readdir(publicDir);
    images = files
      .filter((file) => /\.(jpe?g|png|gif|webp|avif|mp4|webm|mov)$/i.test(file))
      .map((file) => `/pastwork/${file}`);
  } catch (error) {
    console.error('Error reading pastwork images:', error);
    // Handle error state appropriately, perhaps by passing empty or error-indicating props
    return <PastWorkClient enrichedImages={[]} />;
  }

  // merge images with metadata
  const enriched: readonly EnrichedImage[] = images.map((src) => {
    const filename = src.split('/').pop() ?? '';
    const meta = pastWorkMetadata.find((m) => m.filename === filename);
    return { src, meta: meta ? { ...meta } : undefined };
  });

  // sort enriched items by optional order (ascending); items without order appear last
  const sorted: EnrichedImage[] = [...enriched].sort(
    (a, b) => (a.meta?.order ?? Infinity) - (b.meta?.order ?? Infinity)
  );
  return <PastWorkClient enrichedImages={sorted} />;
}
