export const startTransition = (callback: () => void, finishCallback?: () => void) => {
  if (!document.startViewTransition) {
    callback();
    finishCallback?.();
    return;
  }
  return document.startViewTransition(callback).finished.then(() => {
    finishCallback?.();
  });
};
