import { useEffect, useRef } from "react";

interface IInfiniteScrollProps {
    callback: () => void;
    loading: boolean;
}

export function InfiniteScroll({ callback, loading }: IInfiniteScrollProps) {
    const InfiniteScrollDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const { intersectionRatio: ratio } = entry;
            if (ratio > 0 && !loading) {
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