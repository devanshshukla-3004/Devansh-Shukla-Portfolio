'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  return <AnimatePresence mode="wait" initial={false}><motion.div key={pathname} initial={reduce ? false : { opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: reduce ? 0 : 0.32, ease: 'easeOut' }}>{children}</motion.div></AnimatePresence>;
}
