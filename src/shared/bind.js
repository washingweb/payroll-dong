export const bind = (instance, events, handler) => events.map(e => instance[e].call(instance, handler));

// disable all handler
// for handler-do-nothing test
// export const bind = () => [];

export const dispose = watchers => watchers.forEach(w => w.stopWatching());
