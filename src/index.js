export const scrollToElement = function(containerElement, targetElement, duration, offset) {
  if (duration == null) { duration = 1000 }
  if (offset == null) { offset = 0 }

  let targetOffsetTop = getElementOffset(targetElement).top
  let containerOffsetTop = getElementOffset(containerElement).top
  let scrollTarget = targetOffsetTop + ( containerElement.scrollTop - containerOffsetTop)
  scrollTarget += offset /* plus the desired offset */
  scroll(containerElement, scrollTarget, duration)
}

export const scrollWindowToElement = function(targetElement, duration, offset) {
  if (duration == null) { duration = 1000 }
  if (offset == null) { offset = 0 }

  let scrollTarget = getElementOffset(targetElement).top
  scrollTarget += offset /* plus the additional desired offset */
  scrollWindow(scrollTarget, duration)
}

function scroll(containerElement, scrollTarget, duration) {
  let scrollStep = scrollTarget / (duration / 15)
  let interval = setInterval(() => {
    if ( containerElement.scrollTop < scrollTarget ) {
      containerElement.scrollTop += scrollStep
    } else {
      clearInterval(interval)
    }
  },15)
}

function scrollWindow(scrollTarget, duration) {
  let scrollStep = scrollTarget / (duration / 15)
  let interval = setInterval(() => {
    if ( window.scrollY < scrollTarget ) {
      window.scrollBy( 0, scrollStep )
    } else {
      clearInterval(interval)
    }
  },15)
}

function getElementOffset(element) {
  let de = document.documentElement
  let box = element.getBoundingClientRect()
  let top = box.top + window.pageYOffset - de.clientTop
  let left = box.left + window.pageXOffset - de.clientLeft
  return { top: top, left: left }
}
