import { useEffect, useRef } from "react";

export function InfiniteScroll({ callback }) {
    const InfiniteScrollDivRef = useRef(null);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const { intersectionRatio: ratio } = entry;
            if (ratio > 0) {
                callback();
            }
        }, { rootMargin: '5px' });
        if (InfiniteScrollDivRef.current) {
            intersectionObserver.observe(InfiniteScrollDivRef.current);
        }

        return () => {
            intersectionObserver.disconnect();
        }
    }, [InfiniteScrollDivRef]);

    return (
        <div ref={InfiniteScrollDivRef} />
    )
}