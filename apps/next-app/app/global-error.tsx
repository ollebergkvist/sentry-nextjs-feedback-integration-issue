'use client'

import * as Sentry from '@sentry/nextjs'
import NextError from 'next/error'
import { useEffect } from 'react'

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error)
    // @ts-ignore
    Sentry.feedbackIntegration(FeedbackIntegrationOptions)
      .createWidget({ autoInject: false })
      ?.openDialog()
  }, [error])

  return (
    <html>
      <body>
        <NextError statusCode={undefined as any} />
      </body>
    </html>
  )
}
