import { Subscribe } from 'unstated';

/**
 * HOC for Subscribe
 * @func
 * @param {Array} states same as the prop "to" in Subscribe
 * @param {Array} keys names for each provided state
 * @return {Function} HOC
 */
export const subscribeTo = (states, keys) => {
  if (states.length !== keys.length)
    throw new Error('The number of states must equal the number of keys');
  return Comp => props => (
    <Subscribe to={states}>
      {(...stateRefs) => {
        const stateProps = stateRefs.reduce((obj, state, ix) => {
          obj[keys[ix]] = state;
          return obj;
        }, {});
        return <Comp {...props} {...stateProps} />;
      }}
    </Subscribe>
  );
};
