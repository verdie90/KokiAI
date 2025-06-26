"use client";

import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon, LoaderCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useApp } from '@/hooks/use-app';
import { suggestRecipeSearchTerms } from '@/ai/flows/suggest-recipe-search-terms';
import { Card, CardContent } from '@/components/ui/card';
import { useDebounce } from '@/hooks/use-debounce';

export default function Search() {
  const { t, language } = useApp();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const searchRef = useRef<HTMLDivElement>(null);

  const fetchSuggestions = useCallback(async (searchTerm: string) => {
    if (searchTerm.length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }
    setIsLoading(true);
    try {
      const result = await suggestRecipeSearchTerms({ searchTerm, language });
      setSuggestions(result.suggestions);
      setIsOpen(result.suggestions.length > 0);
    } catch (error) {
      console.error('AI suggestion error:', error);
      setSuggestions([]);
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  useEffect(() => {
    fetchSuggestions(debouncedQuery);
  }, [debouncedQuery, fetchSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setIsOpen(false);
    router.push(`/recipe/generate?title=${encodeURIComponent(suggestion)}`);
  };

  return (
    <div className="relative w-full max-w-sm" ref={searchRef}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={t('searchPlaceholder')}
          aria-label={t('searchAriaLabel')}
          className="w-full pl-10 h-9"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length > 1) {
              setIsOpen(true);
            } else {
              setIsOpen(false);
            }
          }}
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
        {isLoading && <LoaderCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />}
      </div>
      {isOpen && suggestions.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg border">
          <CardContent className="p-2">
            <ul className="space-y-1">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-3 py-1.5 hover:bg-accent/50 rounded-md cursor-pointer text-sm"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
