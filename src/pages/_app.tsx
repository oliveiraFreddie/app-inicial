import { CarrinhoProvider } from '@/data/context/CarrinhoContext'
import { ContadorProvider } from '@/data/context/ContadorContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CarrinhoProvider>
      <ContadorProvider>
        <Component {...pageProps} />
      </ContadorProvider>
    </CarrinhoProvider>
  )
}
