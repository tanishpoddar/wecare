'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import React, { useState } from 'react';
import { useFadeIn } from '@/hooks/use-fade-in';

const questions = [
  {
    id: 'hairType',
    text: 'What is your hair type?',
    options: ['Straight', 'Wavy', 'Curly', 'Coily'],
  },
  {
    id: 'hairConcern',
    text: 'What is your primary hair concern?',
    options: ['Hair Loss', 'Dryness', 'Damage', 'Dullness', 'Frizz'],
  },
  {
    id: 'scalpCondition',
    text: 'How would you describe your scalp condition?',
    options: ['Normal', 'Oily', 'Dry', 'Sensitive/Itchy'],
  },
  {
    id: 'hairGoals',
    text: 'What are your main hair goals?',
    options: ['Increase Growth', 'Improve Density', 'Enhance Shine', 'Reduce Breakage', 'Soothe Scalp'],
  },
];

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const fadeIn = useFadeIn<HTMLDivElement>();


  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      // Here you would typically process answers and recommend a product
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuizCompleted(false);
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;


  if (quizCompleted) {
    return (
      <div ref={fadeIn.ref} className={`container mx-auto px-4 py-16 text-center ${fadeIn.className}`}>
        <Card className="max-w-lg mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Quiz Completed!</CardTitle>
            <CardDescription>Based on your answers, we have a personalized recommendation for you.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">We recommend our <strong>wecare Growth Serum</strong>!</p>
            <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
              <img src="https://placehold.co/300x200.png" alt="Recommended Product" className="max-h-full max-w-full object-contain" data-ai-hint="serum bottle"/>
            </div>
            <p>This serum is perfect for addressing concerns like yours and helping you achieve your hair goals.</p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" onClick={resetQuiz}>Retake Quiz</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div ref={fadeIn.ref} className={`container mx-auto px-4 py-12 md:py-16 ${fadeIn.className}`}>
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">Hair Care Quiz</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Answer a few simple questions to find the perfect wecare solution for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Progress Bar */}
          <div className="w-full bg-secondary rounded-full h-2.5 mb-6">
            <div className="bg-accent h-2.5 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
          </div>

          <div>
            <Label htmlFor={currentQuestion.id} className="text-xl font-semibold mb-4 block text-foreground">
              {currentQuestionIndex + 1}. {currentQuestion.text}
            </Label>
            <RadioGroup
              id={currentQuestion.id}
              value={answers[currentQuestion.id] || ''}
              onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
              className="space-y-3"
            >
              {currentQuestion.options.map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-secondary/50 transition-colors">
                  <RadioGroupItem value={option} id={`${currentQuestion.id}-${option}`} />
                  <Label htmlFor={`${currentQuestion.id}-${option}`} className="text-base font-normal cursor-pointer flex-grow">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-6 border-t">
          <Button variant="outline" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
            Previous
          </Button>
          <Button onClick={nextQuestion} disabled={!answers[currentQuestion.id]} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {currentQuestionIndex === questions.length - 1 ? 'Get Results' : 'Next'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
