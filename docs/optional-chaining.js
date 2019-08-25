// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
export default () => {
    const a = {d:{e:'f'};
    return a.b?.c===undefined && a.d?.e==='f';
};
