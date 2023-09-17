import { ReactNode } from "react";

type CarouselButtonType = "prev" | "next";
export interface CarouselButtonProps {
  type: CarouselButtonType;
  onClick(): void;
}

export interface CarouselItemProps {
  bgClassName: string;
  title: string;
  subtitle: string;
  linkText: string;
  href: string;
}

export interface IndicatorsProps {
  scrollSnaps: number[];
  selectedIdx: number;
  onClick(idx: number): void;
}
