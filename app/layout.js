import Header from '@/components/layoutItem/Header'
import '../public/assets/css/globals.css'
import { Inter } from 'next/font/google'
import Provider from './Provider'
import Navbar from '@/components/layoutItem/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB',
  description: 'This is content IMDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
