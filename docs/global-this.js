// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
export default () => {
    return globalThis !== undefined && globalThis === window;
};
