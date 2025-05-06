import { notFound } from 'next/navigation';
import { getPost } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import CodeBlock from '@/components/ui/CodeBlock';
import { Lora } from 'next/font/google';
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type GenerateMetadataProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const imageUrl = post.frontMatter.image
    ? post.frontMatter.image.replace(/^\/public/, '')
    : ''; // Provide a fallback or handle no image case

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.excerpt || 'A blog post by Kai Wilson', // Fallback description
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt || 'A blog post by Kai Wilson',
      images: imageUrl ? [{ url: imageUrl }, ...previousImages] : previousImages,
      url: `/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.frontMatter.date,
      authors: ['Kai Wilson'], // Add author if available in frontmatter or set a default
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt || 'A blog post by Kai Wilson',
      images: imageUrl ? [imageUrl] : undefined, // Twitter images array takes strings
    },
  };
}

const lora = Lora({ subsets: ['latin'], weight: ['400'], display: 'swap' });

export default async function PostPage(props: PostPageProps) {
  // await params to support streaming dynamic params
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) return notFound();

  return (
    <article>
      {/* Featured image from frontmatter */}
      {post.frontMatter.image && (
        <div className="mb-6">
          <Image
            src={post.frontMatter.image.replace(/^\/public/, '')}
            alt={post.frontMatter.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      <h1 className={`${lora.className} mb-2 text-3xl font-bold leading-tight tracking-tighter`}>
        {post.frontMatter.title}
      </h1>
      <time
        className="block mb-6 text-sm text-gray-500"
        dateTime={post.frontMatter.date}
      >
        {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
          new Date(post.frontMatter.date)
        )}
      </time>

      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight]
          },
          parseFrontmatter: false
        }}
        components={{
          h1: (props) => (
            <h1 className={`${lora.className} mb-2 text-3xl font-bold leading-tight tracking-tighter`} {...props} />
          ),
          h2: (props) => (
            <h2 className={`${lora.className} mt-8 mb-4 text-2xl font-semibold`} {...props} />
          ),
          h3: (props) => (
            <h3 className={`${lora.className} mt-6 mb-3 text-xl font-medium`} {...props} />
          ),
          pre: CodeBlock,
          p: ({ children }) => (
            <p className={`${lora.className} text-[18px] text-[#313131]`}>{children}</p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-gray-300 pl-4 italic text-gray-600 my-6">
              {children}
            </blockquote>
          ),
        }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const { getAllPosts } = await import('@/lib/mdx');
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}
