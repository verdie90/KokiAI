"use client";

import { Heart } from 'lucide-react';
import { useApp } from '@/hooks/use-app';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function FavoriteButton({ recipeId }: { recipeId: string }) {
  const { isFavorite, toggleFavorite, t } = useApp();
  const { toast } = useToast();
  const isFav = isFavorite(recipeId);

  const handleToggle = () => {
    toggleFavorite(recipeId);
    toast({
      description: isFav ? t('removedFromFavorites') : t('addedToFavorites'),
      duration: 2000,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label={isFav ? t('removeFromFavorites') : t('saveToFavorites')}
      className="transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <Heart className={cn(
        "h-6 w-6 transition-all duration-300",
        isFav ? "fill-destructive stroke-destructive" : "stroke-muted-foreground"
      )} />
    </Button>
  );
}
