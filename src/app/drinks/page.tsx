"use client";

import { getDrinkRecipes } from '@/lib/recipes';
import { useApp } from '@/hooks/use-app';
import RecipeCard from '@/components/recipe-card';

export default function DrinksPage() {
  const { t } = useApp();
  const recipes = getDrinkRecipes();

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-headline font-bold tracking-tight md:text-4xl lg:text-5xl mb-8">
        {t('drinksTitle')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
