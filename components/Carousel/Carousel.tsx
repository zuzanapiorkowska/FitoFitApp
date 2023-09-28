import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { CarouselButton } from "./CarouselButton";
import { Carouseltem } from "./Carouseltem";
import { carouselItems } from "./utils";
import { CarouselIndicators } from "./CarouselIndicators";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const scrollNext = () => emblaApi.scrollNext();
  const scrollPrev = () => emblaApi.scrollPrev();
  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);
  const resetTimer = () => emblaApi.plugins().autoplay.reset();

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selecteIdx, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  const onItemChange = () => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onItemChange);
    emblaApi.on("reInit", onItemChange);
  }, [emblaApi]);

  //TODO:add PauseCarouselButton to improve accessibility

  return (
    <div className='flex w-full relative h-full'>
      <CarouselIndicators
        scrollSnaps={scrollSnaps}
        selectedIdx={selecteIdx}
        onClick={idx => {
          scrollTo(idx);
          onItemChange();
        }}
      />
      <CarouselButton
        type='prev'
        onClick={() => {
          scrollPrev();
          resetTimer();
        }}
      />
      <CarouselButton
        type='next'
        onClick={() => {
          scrollNext();
          resetTimer();
        }}
      />
      <div className='w-full h-full overflow-hidden' ref={emblaRef}>
        <div className='w-full h-full flex'>
          {carouselItems.map((item, idx) => (
            <Carouseltem {...item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
