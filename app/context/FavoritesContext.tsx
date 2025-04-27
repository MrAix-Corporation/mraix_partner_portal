
'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleFavorite } from '../store/favoritesSlice';

interface FavoritesContextType {
  favorites: any[];
  toggleFavorite: (item: any) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  const handleToggleFavorite = (item: any) => {
    dispatch(toggleFavorite(item));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite: handleToggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
