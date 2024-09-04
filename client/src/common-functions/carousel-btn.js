let newIndex = 0;

export function imageSlide(length, currentIndex, action) {
  switch (action) {
    case "PREV":
      newIndex = currentIndex - 1;
      return newIndex < 0 ? length - 1 : newIndex;
    case "NEXT":
      newIndex = currentIndex + 1;
      return newIndex >= length ? 0 : newIndex;
  }
}
