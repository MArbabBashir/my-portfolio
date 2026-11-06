import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira-code"
})

export const metadata: Metadata = {
  title: 'John Doe | Full Stack Developer',
  description: 'Full Stack Developer specializing in Next.js, React, Laravel, and WordPress. Building exceptional digital experiences with modern technologies.',
  keywords: ['Full Stack Developer', 'Next.js', 'React', 'Laravel', 'WordPress', 'Web Developer'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe | Full Stack Developer',
    description: 'Full Stack Developer specializing in Next.js, React, Laravel, and WordPress.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Full Stack Developer',
    description: 'Full Stack Developer specializing in Next.js, React, Laravel, and WordPress.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
