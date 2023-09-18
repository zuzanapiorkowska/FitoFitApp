import { AnchorHTMLAttributes } from "react";

type CarouselButtonType = "prev" | "next";
export interface CarouselButtonProps {
  type: CarouselButtonType;
  onClick(): void;
}

export interface CarouselItemProps extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  bgClassName: string;
  title: string;
  subtitle: string;
  linkText: string;
}

export interface IndicatorsProps {
  scrollSnaps: number[];
  selectedIdx: number;
  onClick(idx: number): void;
}
