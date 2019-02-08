# optimised-eventlistener

Optimised event listener function using `requestAnimationFrame`.

Since resize/scroll events etc. can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications. Instead, it is recommended to throttle the event using requestAnimationFrame.

## Installation

```
npm i optimised-eventlistener
```

## Usage

To add an event listener to the resize event:

```
import optimisedEventlistener from 'optimised-eventlistener'

function myOnResize() {
  console.log('on resize called')
}

optimisedEventlistener.add('resize', () => {
  myOnResize()
})

// to remove the resize listener call .clear()
optimisedEventlistener.clear('resize')
```

If you wanted to add an event listener to the scroll event pass in 'scroll' instead:

```
import optimisedEventlistener from 'optimised-eventlistener'

function handleScroll() {
  console.log('on scroll')
}

optimisedEventlistener.add('scroll', () => {
  handleScroll()
})
```
