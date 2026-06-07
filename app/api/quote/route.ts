import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  movingFrom: z.string().min(1),
  movingTo: z.string().min(1),
  moveDate: z.string().min(1),
  homeSize: z.string().min(1),
  name: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    // TODO: integrate email service (Nodemailer, SendGrid, Resend, etc.)
    // TODO: save to database
    console.log('[Quote Request]', data)

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.errors }, { status: 400 })
    }
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
