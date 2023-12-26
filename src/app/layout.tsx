import './globals.css'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import Provider from './components/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Njatotiana Fiononana',
  description: 'Njato \'s Portfolio',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={''}>
          <Provider>
            {children}
          </Provider>
        </body>
    </html>
  )
}
