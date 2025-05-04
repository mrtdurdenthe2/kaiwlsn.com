export interface PastWorkMeta {
  /** Filename of the image located in public/pastwork */
  filename: string;
  /** Display title for the work */
  title: string;
  /** Optional subtitle or additional heading */
  subtitle?: string;
  /** Short description or narrative for the work */
  description: string;
}

/**
 * Temporary mocked metadata for every image in `public/pastwork`.
 * Replace with real content once available.
 */
export const pastWorkMetadata: PastWorkMeta[] = [
  {
    filename: 'image01.png',
    title: 'Project Genesis',
    subtitle: 'Mixed-media Exploration',
    description:
      'An experimental piece combining traditional sketching with digital enhancement to capture the essence of creative genesis.',
  },
  {
    filename: 'image02.png',
    title: 'Urban Symphony',
    subtitle: 'Digital Illustration',
    description:
      'A vibrant illustration highlighting the rhythm and movement of metropolitan life through bold colors and dynamic shapes.',
  },
  {
    filename: 'image03.png',
    title: 'EB27',
    subtitle: 'Lamp Study • 1925',
    description:
      "A detailed visualization of Édouard-Wilfrid Buquet's iconic EB27 desk lamp, emphasizing its double-arm design and material textures.",
  },
  {
    filename: 'image04.png',
    title: 'Silent Waves',
    subtitle: 'Concept Art',
    description:
      'A serene coastal scene exploring the interplay between light and water, rendered with soft gradients and subtle motion cues.',
  },
  {
    filename: 'image05.png',
    title: 'Neon Drift',
    subtitle: '3D Render',
    description:
      'A futuristic vehicle drifting through a cyberpunk cityscape, showcasing advanced lighting techniques and reflective surfaces.',
  },
];
