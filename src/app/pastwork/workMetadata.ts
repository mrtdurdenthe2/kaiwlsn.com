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
  {
    filename: 'image06.png',
    title: 'SaaS Hero Section',
    subtitle: 'Designed in Figma',
    description:
      'Mainly just a design exploration, wanted to go for a hero design that portrayed the product well without it being too in your face',
  },
  {
    filename: 'image07.png',
    title: 'Nav Bar',
    subtitle: 'Designed in Figma',
    description:
      'Bit of a "Gamey" design, the gradient under the plus button would move around and rotate',
  },
  {
    filename: 'image08.png',
    title: 'X Spaces Live Chat Concept',
    subtitle: 'Designed in Figma. Implemented with NextJS and TailwindCSS',
    description:
      'Created a concept of what I thought the X spaces should look like, taking advantage of Xs new subscriber message highlighting',
  },
  {
    filename: 'image10png',
    title: 'Testimonial Section',
    subtitle: 'Designed in Figma, implemented with NextJS and TailwindCSS',
    description:
      'Aimed to recreate the iMessage style with the blue text boxes',
  },
  {
    filename: 'image11.png',
    title: 'Pricing Section',
    subtitle: 'Designed in Figma, implemented with NextJS and TailwindCSS',
    description:
      'Made for a design agency, wanted to make the pricing clear while not making it too overwhelming between the options. The different colors at the top hint toward different pricing plans',
  },
];
