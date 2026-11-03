"use client";

import {
  BLOSSOM_QUERY_KEY,
  BLOSSOM_STORAGE_KEY,
  PETAL_CAP_DESKTOP,
  PETAL_CAP_MOBILE,
  isBlossomVariant,
  type BlossomVariant,
} from "@/components/pages/Homepage/BlossomParallax/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const mediaMatches = (query: string) =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

export const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(() =>
    mediaMatches("(prefers-reduced-motion: reduce)")
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
};

export const useIsMobile = () => {
  const [mobile, setMobile] = useState(() => mediaMatches("(max-width: 767px)"));

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return mobile;
};

export const usePetalCap = () =>
  useIsMobile() ? PETAL_CAP_MOBILE : PETAL_CAP_DESKTOP;

export const useBlossomVariant = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const param = searchParams.get(BLOSSOM_QUERY_KEY);
  const [variant, setVariantState] = useState<BlossomVariant>(
    isBlossomVariant(param) ? param : "a"
  );

  useEffect(() => {
    if (isBlossomVariant(param)) {
      setVariantState(param);
      sessionStorage.setItem(BLOSSOM_STORAGE_KEY, param);
      return;
    }
    const stored = sessionStorage.getItem(BLOSSOM_STORAGE_KEY);
    if (isBlossomVariant(stored)) setVariantState(stored);
  }, [param]);

  const setVariant = useCallback(
    (next: BlossomVariant) => {
      setVariantState(next);
      sessionStorage.setItem(BLOSSOM_STORAGE_KEY, next);
      const params = new URLSearchParams(searchParams.toString());
      params.set(BLOSSOM_QUERY_KEY, next);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams]
  );

  return { variant, setVariant };
};
