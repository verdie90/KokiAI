"use client";

import { useSearchParams } from 'next/navigation';
import { generateRecipe, type GenerateRecipeOutput } from '@/ai/flows/generate-recipe';
import { useApp } from '@/hooks/use-app';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, ChefHat, LoaderCircle } from 'lucide-react';
import { useEffect, useState, Suspense } from 'react';

function GeneratedRecipePageContent() {
    const searchParams = useSearchParams();
    const { t, language } = useApp();
    const [recipe, setRecipe] = useState<GenerateRecipeOutput | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const title = searchParams.get('title');

    useEffect(() => {
        if (!title) {
            setError("No recipe title provided.");
            setLoading(false);
            return;
        }

        const fetchRecipe = async () => {
            setLoading(true);
            setError(null);
            try {
                const generatedRecipe = await generateRecipe({ title, language });
                setRecipe(generatedRecipe);
            } catch (err) {
                console.error("Failed to generate recipe:", err);
                setError("Sorry, we couldn't generate that recipe. Please try another one.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [title, language]);

    if (loading) {
        return (
            <div className="container py-12">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center min-h-[60vh]">
                    <LoaderCircle className="h-16 w-16 animate-spin text-primary mb-6" />
                    <h1 className="text-3xl font-headline font-bold mb-2">{t('generatingRecipeTitle')}</h1>
                    <p className="text-lg text-muted-foreground">{t('generatingRecipeMessage')}</p>
                </div>
            </div>
        );
    }
    
    if (error) {
         return (
            <div className="container py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl font-bold text-destructive">{error}</h1>
                </div>
            </div>
        );
    }

    if (!recipe) {
        return null;
    }

    return (
        <article className="container py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-4xl lg:text-5xl font-headline font-bold">{recipe.title}</h1>
                </div>
                <p className="text-lg text-muted-foreground mb-8">{recipe.description}</p>

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
                                    {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-headline font-bold mb-6">{t('steps')}</h2>
                        <div className="space-y-6">
                            <ol className="list-decimal list-outside space-y-6 ml-4">
                                {recipe.steps.map((step, i) => (
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

export default function GeneratedRecipePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GeneratedRecipePageContent />
        </Suspense>
    )
}
