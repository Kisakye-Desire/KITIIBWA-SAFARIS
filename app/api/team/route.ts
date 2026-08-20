import { NextRequest, NextResponse } from 'next/server'
import { teamMembers, getTeamMemberById } from '@/lib/data/team'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (id) {
      const member = getTeamMemberById(parseInt(id))
      if (!member) {
        return NextResponse.json({ error: 'Team member not found' }, { status: 404 })
      }
      return NextResponse.json({ success: true, data: member })
    }

    return NextResponse.json({
      success: true,
      count: teamMembers.length,
      data: teamMembers,
    })
  } catch (error) {
    console.error('[TEAM API]', error)
    return NextResponse.json({ error: 'Failed to fetch team' }, { status: 500 })
  }
}
