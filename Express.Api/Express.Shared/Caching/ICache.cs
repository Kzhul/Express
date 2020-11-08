using System;
using System.Threading.Tasks;

namespace Express.Shared.Caching
{
    public interface ICache
    {
        void Set<T>(string key, T value, TimeSpan expiry);
        Task SetAsync<T>(string key, T value, TimeSpan expiry);
        T Get<T>(string key);
        T Get<T>(string key, TimeSpan expiry, Func<T> callBackFunction);
        Task<T> GetAsync<T>(string key);
        Task<T> GetAsync<T>(string key, TimeSpan expiry, Func<T> callBackFunction);
        Task<T> GetAsync<T>(string key, TimeSpan expiry, Func<Task<T>> callBackFunction);
        void Remove(string key);
        Task RemoveAsync(string key);
    }
}
