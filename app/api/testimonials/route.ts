import { NextRequest, NextResponse } from 'next/server'
import { testimonials, getTestimonialsByRating, getTopTestimonials } from '@/lib/data/team'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const minRating = searchParams.get('minRating')
    const topOnly = searchParams.get('top')

    let results = testimonials

    // Get top testimonials
    if (topOnly) {
      const limit = parseInt(topOnly) || 3
      results = getTopTestimonials(limit)
    } else if (minRating) {
      // Filter by minimum rating
      results = getTestimonialsByRating(parseInt(minRating))
    }

    return NextResponse.json({
      success: true,
      count: results.length,
      data: results,
    })
  } catch (error) {
    console.error('[TESTIMONIALS API]', error)
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}
