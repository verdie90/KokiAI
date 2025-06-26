"use client";

import Link from 'next/link';
import { Utensils } from 'lucide-react';
import { useApp } from '@/hooks/use-app';
import Search from '@/components/search';
import LanguageSwitcher from '@/components/language-switcher';

export default function Header() {
  const { t } = useApp();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Utensils className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold font-headline text-lg">{t('appName')}</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('navHome')}
            </Link>
            <Link href="/favorites" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('navFavorites')}
            </Link>
            <Link href="/drinks" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t('navDrinks')}
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <Search />
          </div>
          <nav className="flex items-center">
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
