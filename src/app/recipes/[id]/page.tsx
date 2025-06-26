"use client";

import { useParams } from 'next/navigation';
import { getRecipeById, type Recipe } from '@/lib/recipes';
import { useApp } from '@/hooks/use-app';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FavoriteButton from '@/components/favorite-button';
import { Clock, Users, ChefHat } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function RecipePage() {
  const params = useParams();
  const { t, language } = useApp();
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (params.id) {
        const foundRecipe = getRecipeById(Array.isArray(params.id) ? params.id[0] : params.id);
        setRecipe(foundRecipe);
    }
    setLoading(false);
  }, [params.id, language]);

  if (loading || !recipe) {
    return (
        <div className="container py-12">
            <div className="max-w-4xl mx-auto animate-pulse">
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-8 w-1/2 mb-10" />
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <Skeleton className="h-64 w-full" />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                      <Skeleton className="h-8 w-1/3 mb-4" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-6 w-5/6" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-6 w-full" />
                  </div>
                </div>
            </div>
        </div>
    );
  }

  return (
    <article className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-4xl lg:text-5xl font-headline font-bold">{recipe.title[language]}</h1>
          <FavoriteButton recipeId={recipe.id} />
        </div>
        <p className="text-lg text-muted-foreground mb-8">{recipe.description[language]}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-4 mb-10 border-t border-b py-4">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-5 w-5 mr-2 text-primary"/>
            <span className="font-medium">{t('prepTime')}:</span>
            <span className="ml-2">{recipe.prepTime}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="h-5 w-5 mr-2 text-primary"/>
            <span className="font-medium">{t('servings')}:</span>
            <span className="ml-2">{recipe.servings}</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            <div className="md:col-span-1">
                <Card className="sticky top-24">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2 text-xl">
                          <ChefHat className="h-6 w-6"/>
                          {t('ingredients')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2 text-foreground/90">
                            {recipe.ingredients[language].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-2">
                <h2 className="text-3xl font-headline font-bold mb-6">{t('steps')}</h2>
                <div className="space-y-6">
                    <ol className="list-decimal list-outside space-y-6 ml-4">
                       {recipe.steps[language].map((step, i) => (
                        <li key={i} className="pl-2">
                            <p className="leading-relaxed">{step}</p>
                        </li>
                       ))}
                    </ol>
                </div>
            </div>
        </div>

      </div>
    </article>
  );
}
