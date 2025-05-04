import fs from 'fs';
import path from 'path';

export type WorkItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

function getAllWorkItems(): WorkItem[] {
  const projectsDir = path.join(process.cwd(), 'public', 'pastwork');
  let files: string[] = [];
  try {
    files = fs.readdirSync(projectsDir);
  } catch (error) {
    console.error('Error reading projects directory:', error);
    return [];
  }
  return files
    .filter(file => /\.(jpe?g|png|gif|svg)$/.test(file))
    .map((file, index) => ({
      id: index + 1,
      title: `Project ${index + 1}`,
      description: `Description for project ${index + 1}. This is a sample description.`,
      imageUrl: `/pastwork/${file}`,
    }));
}

export function getWorkItems(page: number, limit: number) {
  const allItems = getAllWorkItems();
  const total = allItems.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const items = allItems.slice(start, end);
  return { items, total };
}
