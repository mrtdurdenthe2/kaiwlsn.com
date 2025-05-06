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
    title: 'CRT Screen View',
    subtitle: 'Figma Design',
    description:
      'Designed CRT screen inspired by the Braun T1, with the intention of putting my personal website inside of it.',
  },
  {
    filename: 'image02.png',
    title: 'Sign up form',
    subtitle: 'Designed in Figma, coded in NextJS andTailwindCSS using Clerk for auth',
    description:
      'A sign up form UI that uses Clerks Beta feature that allows the use of custom sign in/up UI',
  },
  {
    filename: 'image03.png',
    title: 'Navbar design exploration',
    subtitle: 'Figma Design',
    description:
      "Wanted to go for a metal looking navbar, with the selected button emmiting light onto the other buttons.",
  },
  {
    filename: 'image04.png',
    title: 'LLM Model Selection UI',
    subtitle: 'Designed in Figma, made in NextJS and TailwindCSS',
    description:
      'Wanted to go for game cartriged inspired UI, where the user can swich between AI manufacturers and models by swiping, then inserting the card once they have selected the model.',
  },
  {
    filename: 'image05.png',
    title: 'Vine Concept',
    subtitle: 'Designed in Figma',
    description:
      'Wanted to make a design of what I would think the Vine app would look like today, inspired by the X mobile UI.',
  },
];
