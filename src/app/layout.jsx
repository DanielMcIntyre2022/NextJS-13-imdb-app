import './globals.css'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Searchbox from '@/components/Searchbox'
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
            {/* Header */}
            <Header/>
            {/* Navbar */}
            <Navbar/>
            {/* SearchBox */}
            <Searchbox/>
            {children}
        </Providers>
      </body>
    </html>
  )
}
