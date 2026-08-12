import { NextRequest, NextResponse } from 'next/server'
import { safariPackages, getPackagesByDifficulty, getPackagesByBudget } from '@/lib/data/packages'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const difficulty = searchParams.get('difficulty')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const id = searchParams.get('id')

    let packages = safariPackages

    // Filter by specific package ID
    if (id) {
      const pkg = packages.find((p) => p.id === parseInt(id))
      if (!pkg) {
        return NextResponse.json({ error: 'Package not found' }, { status: 404 })
      }
      return NextResponse.json({ success: true, data: pkg })
    }

    // Filter by difficulty
    if (difficulty) {
      packages = getPackagesByDifficulty(difficulty)
    }

    // Filter by price range
    if (minPrice && maxPrice) {
      packages = getPackagesByBudget(
        parseFloat(minPrice),
        parseFloat(maxPrice)
      )
    }

    return NextResponse.json({
      success: true,
      count: packages.length,
      data: packages,
    })
  } catch (error) {
    console.error('[PACKAGES API]', error)
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 })
  }
}
