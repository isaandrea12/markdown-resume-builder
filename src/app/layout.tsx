import './globals.css'

export const metadata = {
  title: 'Markdown Resume Builder',
  description: 'Minimal Markdown resume builder with PDF export',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  )
}
