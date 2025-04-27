
'use client'

import { Provider } from 'react-redux'
import { store } from '../store/store'
import { FavoritesProvider } from '../context/FavoritesContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <FavoritesProvider>{children}</FavoritesProvider>
    </Provider>
  )
}
