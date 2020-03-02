/**
 * @param  {string} KEY
 */
export default function localStorageManager(KEY) {
  return {
    /**
     * @param  {string} val
     */
    set(val) {
      window.localStorage.setItem(KEY, val);
    },
    get() {
      return window.localStorage.getItem(KEY);
    },
    remove() {
      window.localStorage.removeItem(KEY);
    }
  };
}
