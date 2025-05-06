import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <h2 className="text-xl font-semibold mb-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <time className="block text-sm text-gray-500" dateTime={post.date}>
                {new Intl.DateTimeFormat('en-US', {
                  dateStyle: 'long'
                }).format(new Date(post.date))}
              </time>
              {post.excerpt && <p className="mt-2 text-gray-700 dark:text-gray-300">{post.excerpt}</p>}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
