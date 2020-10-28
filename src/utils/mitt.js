const mitt = (all) => {
  all = all || new Map()
  return {
    on(type, handler) {
      let handlers = all.get(type)
      if (handlers) {
        handlers.push(handler)
      } else {
        all.set(type, [handler])
      }
    },
    once(type, handler) {
      const listener = (...evt) => {
        this.off(type, listener)
        handler(...evt)
      }
      this.on(type, listener)
    },
    off(type, handler) {
      let handlers = all.get(type)
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1)
      }
    },
    emit(type, ...evt) {
      let handlers = all.get(type) || []
      handlers.slice().map((handler) => {
        handler(...evt)
      })
    },
  }
}
export default mitt
