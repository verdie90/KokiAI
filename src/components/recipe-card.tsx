"use client";

import Link from 'next/link';
import { type Recipe } from '@/lib/recipes';
import { useApp } from '@/hooks/use-app';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import FavoriteButton from '@/components/favorite-button';
import { Clock } from 'lucide-react';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { t, language } = useApp();

  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border">
      <CardHeader className="flex-grow">
        <div className="flex justify-between items-start gap-4">
            <CardTitle className="font-headline text-2xl leading-tight hover:text-primary transition-colors">
              <Link href={`/recipes/${recipe.id}`} className="block">
                {recipe.title[language]}
              </Link>
            </CardTitle>
          <div className="flex-shrink-0 -mt-2 -mr-2">
            <FavoriteButton recipeId={recipe.id} />
          </div>
        </div>
        <CardDescription className="pt-2 line-clamp-3">{recipe.description[language]}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1.5" />
          <span>{recipe.prepTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
