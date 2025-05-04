import PastWorkGrid from '@/components/PastWorkGrid';
import { getWorkItems } from '@/lib/pastWork';

export default async function PastWorkPage() {
  const { items, total } = getWorkItems(1, 10);
  return (
    <main className="w-full p-2.5">
      <PastWorkGrid initialItems={items} total={total} />
    </main>
  );
}


