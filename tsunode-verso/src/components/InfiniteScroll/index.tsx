import { useEffect, useRef } from "react";

interface IInfiniteScrollProps {
    callback: () => void;
    hasNextPage: boolean;
}

export function InfiniteScroll({ callback, hasNextPage }: IInfiniteScrollProps) {
    const InfiniteScrollDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!hasNextPage) {
            return;
        }

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
            if (InfiniteScrollDivRef.current) {
                intersectionObserver.unobserve(InfiniteScrollDivRef.current);
            }            
        }
    }, [InfiniteScrollDivRef, hasNextPage]);

    return (
        <div ref={InfiniteScrollDivRef} />
    )
}