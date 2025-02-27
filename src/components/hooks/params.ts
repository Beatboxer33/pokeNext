"use client";

import { useSearchParams } from "next/navigation";

export default function useUrlParams(parameter: string) {
    const searchParams = useSearchParams();
    const search = searchParams.get(parameter);

    return { search };
}
