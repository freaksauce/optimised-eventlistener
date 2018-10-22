/**
 * optimisedEventListener utilising requestAnimationFrame
 * Based on MDN's Resize function
 * https://developer.mozilla.org/en-US/docs/Web/Events/resize
 */
const optimisedEventlistener = (() => {
  const callbacks = []
  let running = false

  // run the actual callbacks
  function runCallbacks() {
    callbacks.forEach((callback) => {
      callback()
    })
    running = false
  }

  // fired on resize event
  function eventHandler() {
    if (!running) {
      running = true
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks)
      } else {
        setTimeout(runCallbacks, 66)
      }
    }
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback)
    }
  }

  return {
    // public method to add additional callback
    add: (event, callback) => {
      if (!callbacks.length) {
        window.addEventListener(event, eventHandler)
      }
      addCallback(callback)
    },
    clear: (listener) => {
      window.removeEventListener(listener, eventHandler)
    }
  }
})()

export default optimisedEventlistener
