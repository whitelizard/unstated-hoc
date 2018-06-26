# unstated-hoc

A HOC (Higher Order Component) for [Unstated](https://github.com/jamiebuilds/unstated) Subscribe.

This tiny module was made to get a more functional way of using Unstated -- similar to **_redux_'s** way of binding state to a component with **_connect_**, and also similar to and compatible with [recompose](https://github.com/acdlite/recompose).

## This example from Unstated:

```js
function Counter() {
  return (
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <div>
          <button onClick={() => counter.decrement()}>-</button>
          <span>{counter.state.count}</span>
          <button onClick={() => counter.increment()}>+</button>
        </div>
      )}
    </Subscribe>
  );
}
```

## With this module becomes:

```js
const CounterView = ({ counter }) => (
  <div>
    <button onClick={() => counter.decrement()}>-</button>
    <span>{counter.state.count}</span>
    <button onClick={() => counter.increment()}>+</button>
  </div>
);
const Counter = subscribeTo([CounterContainer], ['counter'])(CounterView);
```

## Another variation, with recompose:

```js
import { compose } from 'recompose';

const Counter = compose(
  subscribeTo([CounterContainer], ['counter'])
  // other possible HOCs
)(({ counter }) => (
  <div>
    <button onClick={() => counter.decrement()}>-</button>
    <span>{counter.state.count}</span>
    <button onClick={() => counter.increment()}>+</button>
  </div>
));
```

# Licence

MIT
