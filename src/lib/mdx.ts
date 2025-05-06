export interface PostMeta {
  title: string;
  date: string; // ISO string
  excerpt?: string;
  image?: string;
  slug: string;
}

interface RawPost {
  frontMatter: Omit<PostMeta, 'slug'>;
  content: string;
}

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Absolute path to where MDX posts are stored
const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

/**
 * Read a single post from the file-system.
 * Returns `null` when the file does not exist or cannot be parsed.
 */
export async function getPost(slug: string): Promise<(RawPost & { slug: string }) | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const file = await fs.readFile(filePath, 'utf8');

    const { content, data } = matter(file);

    // Basic validation – ensure required fields exist
    if (typeof data.title !== 'string' || typeof data.date !== 'string') {
      console.warn(`Post "${slug}" is missing required front-matter fields.`);
      return null;
    }

    return {
      frontMatter: {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt ?? '',
        image: data.image ?? ''
      },
      content,
      slug
    };
  } catch (error) {
    // Most likely the file does not exist or cannot be read
    console.error(`Failed to load post "${slug}":`, error);
    return null;
  }
}

/**
 * Return every post's front-matter (metadata) sorted by date DESC.
 */
export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);

    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith('.mdx'))
        .map(async (file) => {
          const slug = file.replace(/\.mdx?$/, '');
          const post = await getPost(slug);
          return post ? { ...post.frontMatter, slug } : null;
        })
    );

    return (
      posts
        .filter(Boolean) as PostMeta[]
    ).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  } catch (error) {
    console.error('Failed to load posts:', error);
    return [];
  }
}
