import { useLayoutEffect } from 'react';
import gsap from 'gsap';

export function useGsapContext(scope, animation, dependencies = []) {
  useLayoutEffect(() => {
    if (!scope.current) {
      return undefined;
    }

    const context = gsap.context(animation, scope);

    return () => context.revert();
  }, dependencies);
}
