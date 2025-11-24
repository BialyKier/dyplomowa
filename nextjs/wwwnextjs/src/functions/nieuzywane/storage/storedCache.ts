type CacheState = {
  locales: string[] | null;
  timestamp: number;
}


let _cache: CacheState = {
  locales: null,
  timestamp: 0,
};


const CACHE_TTL = 60 * 1000;


export const getCachedLocales = (): string[] | null => {
  const now = Date.now();
  if (_cache.locales && (now - _cache.timestamp < CACHE_TTL)) {
    return _cache.locales;
  }
  return null;
};
export const setCachedLocales = (newLocales: string[]) => {
  _cache = {
    locales: newLocales,
    timestamp: Date.now(),
  };
};
export const resetCachedLocales = () => {
  _cache.locales = null;
  _cache.timestamp = 0;
};