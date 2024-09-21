import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSurveyURL(): string {
  return process.env.NEXT_PUBLIC_SURVEY_URL || '/default-survey'
}