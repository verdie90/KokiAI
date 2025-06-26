"use client";

import { useApp } from '@/hooks/use-app';
import { getRecipeById } from '@/lib/recipes';
import RecipeCard from '@/components/recipe-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const { t, favorites } = useApp();
  const favoriteRecipes = favorites.map(id => getRecipeById(id)).filter(Boolean);

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-headline font-bold tracking-tight md:text-4xl lg:text-5xl mb-8">
        {t('favoritesTitle')}
      </h1>

      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteRecipes.map((recipe) => (
            recipe && <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg flex flex-col items-center justify-center min-h-[40vh]">
            <Heart className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground mb-4">{t('favoritesEmpty')}</p>
            <Button asChild>
                <Link href="/">{t('navHome')}</Link>
            </Button>
        </div>
      )}
    </div>
  );
}
