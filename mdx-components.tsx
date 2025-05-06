import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { Victor_Mono } from 'next/font/google';

const victorMono = Victor_Mono({ subsets: ['latin'], weight: ['200','300'] });

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className={`${victorMono.className}`} {...props} />,
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image {...(props as ImageProps)} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
    ),
    a: (props) => <Link {...props} className="text-blue-600 underline" />,
    ...components,
  };
}
