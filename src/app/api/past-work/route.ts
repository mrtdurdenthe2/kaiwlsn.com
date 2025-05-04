import { NextRequest, NextResponse } from 'next/server';
import { getWorkItems } from '@/lib/pastWork';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const pageParam = searchParams.get('page');
    const limitParam = searchParams.get('limit');
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const limit = limitParam ? parseInt(limitParam, 10) : 10;

    if (isNaN(page) || page < 1 || isNaN(limit) || limit < 1) {
      return NextResponse.json(
        { error: 'Invalid pagination parameters' },
        { status: 400 }
      );
    }

    const { items, total } = getWorkItems(page, limit);
    return NextResponse.json({ items, total });
  } catch (error) {
    console.error('Error fetching work items:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
