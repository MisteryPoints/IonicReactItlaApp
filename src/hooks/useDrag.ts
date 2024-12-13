import { RefObject, MouseEvent, TouchEvent } from 'react';

export const useDrag = (ref: RefObject<HTMLDivElement>) => {
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    isDown = true;
    ref.current.style.cursor = 'grabbing';
    
    if ('touches' in e) {
      startX = e.touches[0].pageX - ref.current.offsetLeft;
    } else {
      startX = e.pageX - ref.current.offsetLeft;
    }
    
    scrollLeft = ref.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    isDown = false;
    ref.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    if (!ref.current) return;
    isDown = false;
    ref.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!isDown || !ref.current) return;
    e.preventDefault();
    
    let x: number;
    if ('touches' in e) {
      x = e.touches[0].pageX - ref.current.offsetLeft;
    } else {
      x = e.pageX - ref.current.offsetLeft;
    }
    
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return {
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  };
};