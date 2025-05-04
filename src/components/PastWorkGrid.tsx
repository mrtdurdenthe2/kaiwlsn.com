'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WorkItem } from '@/lib/pastWork';
import PastWorkItem from './PastWorkItem';

type PastWorkGridProps = {
  initialItems: WorkItem[];
  total: number;
};

export default function PastWorkGrid({ initialItems, total }: PastWorkGridProps) {
  const [items, setItems] = useState<WorkItem[]>(initialItems);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selected, setSelected] = useState<WorkItem | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || items.length >= total) return;
    setLoading(true);
    setError('');
    try {
      const nextPage = page + 1;
      const res = await fetch(`/api/past-work?page=${nextPage}&limit=10`);
      if (!res.ok) throw new Error('Failed to load more items');
      const data = await res.json();
      setItems(prev => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [items.length, page, total, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: '200px' }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="flex flex-row flex-wrap items-start justify-center w-full p-2.5 gap-2.5">
        {items.map(item => (
          <PastWorkItem key={item.id} item={item} onClick={() => setSelected(item)} />
        ))}
      </div>
      {loading && <p className="text-center my-4">Loading...</p>}
      <div ref={loadMoreRef} />
    </>
  );
}
