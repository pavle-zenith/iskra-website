'use client';

import type { ReactNode } from 'react';
import { QUIZ_URL } from '@/lib/constants';
import { track } from '@/lib/analytics';

interface QuizLinkProps {
  children: ReactNode;
  className?: string;
  location: string;
}

export default function QuizLink({ children, className, location }: QuizLinkProps) {
  return (
    <a href={QUIZ_URL} className={className} onClick={() => track.quizCtaClicked(location)}>
      {children}
    </a>
  );
}
