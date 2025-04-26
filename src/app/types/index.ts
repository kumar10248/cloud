export interface Question {
  question: string;
  options: string[];
  correctAnswer: number[]; // Now all questions use an array for correctAnswers
  explanation: string;
}

export interface WeekQuestions {
  [key: string]: Question[];
}

export type PracticeMode = 'week0' | 'week1' | 'week2' | 'week3' | 'week4' | 'week5' | 'week6' |'week7'|'week8'|'week9| week10'| 'week11'| 'week12'| 'all' | 'assignment';

export interface PracticeOption {
  id: PracticeMode;
  label: string;
  icon: React.ReactNode | string;
}

export interface SessionStats {
  questionsAnswered: number;
  correctAnswers: number;
  timeRemaining: number;
  totalQuestions: number;
  mode: PracticeMode;
}