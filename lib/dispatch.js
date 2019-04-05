const create = (channel = "redom") => {
    const dispatch = (target, type, data) => {
      const event = new window.CustomEvent(channel, {
        bubbles: true,
        detail: {
          type,
          data
        }
      });
      const el = target.el || target;
  
      el.dispatchEvent(event);
    };
  
    const listen = (target, handlers) => {
      const el = target.el || target;
  
      const handler = e => {
        const { type, data } = e.detail;
  
        handlers[type] && handlers[type](data);
      };
  
      el.addEventListener(channel, handler);
  
      return {
        destroy() {
          el.removeEventListener(channel, handler);
        }
      };
    };
  
    return {
        dispatch,
        listen
    }
  };
  
  export { 
      create
  }
  