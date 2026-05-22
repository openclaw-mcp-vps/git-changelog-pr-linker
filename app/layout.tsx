import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Git Changelog PR Linker — Auto-generate changelogs with PR context links',
  description: 'GitHub App that automatically generates changelogs with links to PRs, issues, and commit context for releases. Built for engineering teams and open source maintainers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6a7cb26d-e9f9-4a56-8cd1-76a93300ec42"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
