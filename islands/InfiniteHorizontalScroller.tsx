import  { ComponentChildren } from 'preact';
import { useRef, useEffect } from 'preact/hooks';

interface Props {
    children: ComponentChildren;
}

export default function InfiniteScroller({ children} : Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollerInner = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollerContent = Array.from(scrollerInner.current.children);
    
    scrollerContent.forEach((item) => {
        const itemClone = item.cloneNode(true);
        itemClone.setAttribute("aria-hidden", true);
        scrollerInner.current.appendChild(itemClone);
    });
  }, []);

  return (
    <div ref={scroller} class="max-w-[100vw] overflow-hidden">
      <div ref={scrollerInner} class="flex flex-wrap gap-4 overflow-hidden w-max flex-nowrap animate-scroll hover:animate-scrollHover">
        {children}
      </div>
    </div>
  );
}
