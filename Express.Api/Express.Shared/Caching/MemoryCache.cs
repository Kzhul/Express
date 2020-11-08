using LazyCache;
using System;
using System.Threading.Tasks;

namespace Express.Shared.Caching
{
    public class MemoryCache : ICache
    {
        private readonly IAppCache _cache;

        public MemoryCache()
        {
            _cache = new CachingService();
        }

        public void Set<T>(string key, T value, TimeSpan expiry)
        {
            Remove(key);
            if (value != null)
                _cache.Add(key, value, expiry);
        }

        public Task SetAsync<T>(string key, T value, TimeSpan expiry)
        {
            return Task.Run(() => Set(key, value, expiry));
        }

        public T Get<T>(string key)
        {
            return _cache.Get<T>(key);
        }

        public T Get<T>(string key, TimeSpan expiry, Func<T> callBackFunction)
        {
            return _cache.GetOrAdd(key, callBackFunction, expiry);
        }

        public Task<T> GetAsync<T>(string key)
        {
            return _cache.GetAsync<T>(key);
        }

        public Task<T> GetAsync<T>(string key, TimeSpan expiry, Func<T> callBackFunction)
        {
            return Task.FromResult(_cache.GetOrAdd(key, callBackFunction, expiry));
        }

        public Task<T> GetAsync<T>(string key, TimeSpan expiry, Func<Task<T>> callBackFunction)
        {
            return _cache.GetOrAddAsync(key, callBackFunction, expiry);
        }

        public void Remove(string key)
        {
            _cache.Remove(key);
        }

        public Task RemoveAsync(string key)
        {
            Remove(key);
            return Task.CompletedTask;
        }
    }
}
