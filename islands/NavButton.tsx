import { type PageID, setCurrentPageId } from "../signals/currentPageIdSignal.ts";
import { useCallback, useEffect } from "preact/hooks";

interface NavButtonProps {
    arrowDirection: 'up' | 'down';
    parentId: PageID;
    targetId: PageID;
}

const isElementVisible = (elem: HTMLElement) => {
    const { offsetHeight } = elem;
    const halfOffsetHeight = offsetHeight/2;
    
    const { y } = elem.getBoundingClientRect();
    
    return y > -1 * offsetHeight + halfOffsetHeight && y < offsetHeight - halfOffsetHeight;
}

export default function NavButton ({ arrowDirection, parentId, targetId }: NavButtonProps) {
    const onScroll = useCallback(() => {
        const parentEl = document.getElementById(parentId)
        const parentVisible = parentEl ? isElementVisible(parentEl) : false
        if (parentVisible) {
            setCurrentPageId(parentId)
        }
    }, [parentId]);

    useEffect(() => {
        addEventListener('scroll', onScroll);
    },[]);

    return (
        arrowDirection === 'down' ? (
            <button onClick={() => { document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} class="absolute bottom-8 right-8 w-20 h-20 rounded-full hover:animate-bounce duration-300 focus:outline-none">
                <svg class="w-18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        ) : (
            <button onClick={() => { document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} class="absolute bottom-8 right-8 w-20 h-20 rounded-full hover:animate-bounce duration-300 focus:outline-none">
                <svg class="w-18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        )
    )
}
