using Express.Shared.Extensions;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Express.Shared.Caching
{
    public class RedisCache : ICache
    {
        private readonly IDatabase _database;

        public RedisCache(string connectionString)
        {
            var connections = ConnectionMultiplexer.Connect(connectionString);
            _database = connections.GetDatabase();
        }

        public void Set<T>(string key, T value, TimeSpan expiry)
        {
            if (value != null)
            {
                var redisValue = value.GetJson();
                _database.StringSet(key, redisValue, expiry);
            }
        }

        public async Task SetAsync<T>(string key, T value, TimeSpan expiry)
        {
            if (value != null)
            {
                var redisValue = value.GetJson();
                await _database.StringSetAsync(key, redisValue, expiry).ConfigureAwait(false);
            }
        }

        public T Get<T>(string key)
        {
            var value = default(T);
            var redisValue = _database.StringGet(key);
            if (!redisValue.IsNull)
                value = redisValue.ToString().GetModelFromJson<T>();

            return value;
        }

        public T Get<T>(string key, TimeSpan expiry, Func<T> callBackFunction)
        {
            var value = default(T);
            var redisValue = _database.StringGet(key);
            if (!redisValue.IsNull)
                value = redisValue.ToString().GetModelFromJson<T>();
            else if (callBackFunction != null)
            {
                var callbackResult = callBackFunction();
                Set(key, callbackResult, expiry);
                value = Get<T>(key);
            }

            return value;
        }

        public async Task<T> GetAsync<T>(string key)
        {
            var value = default(T);
            var redisValue = await _database.StringGetAsync(key).ConfigureAwait(false);
            if (!redisValue.IsNull)
                value = redisValue.ToString().GetModelFromJson<T>();

            return value;
        }

        public async Task<T> GetAsync<T>(string key, TimeSpan expiry, Func<T> callBackFunction)
        {
            var value = default(T);
            var redisValue = await _database.StringGetAsync(key).ConfigureAwait(false);
            if (!redisValue.IsNull)
                value = redisValue.ToString().GetModelFromJson<T>();
            else if (callBackFunction != null)
            {
                var callbackResult = callBackFunction();
                await SetAsync(key, callbackResult, expiry).ConfigureAwait(false);
                value = await GetAsync<T>(key).ConfigureAwait(false);
            }

            return value;
        }

        public async Task<T> GetAsync<T>(string key, TimeSpan expiry, Func<Task<T>> callBackFunction)
        {
            var value = default(T);
            var redisValue = await _database.StringGetAsync(key).ConfigureAwait(false);
            if (!redisValue.IsNull)
                value = redisValue.ToString().GetModelFromJson<T>();
            else if (callBackFunction != null)
            {
                var callbackResult = await callBackFunction().ConfigureAwait(false);
                await SetAsync(key, callbackResult, expiry).ConfigureAwait(false);
                value = await GetAsync<T>(key).ConfigureAwait(false);
            }

            return value;
        }

        public void Remove(string key)
        {
            if (_database.KeyExists(key))
                _database.KeyDelete(key);
        }

        public async Task RemoveAsync(string key)
        {
            if (await _database.KeyExistsAsync(key).ConfigureAwait(false))
                await _database.KeyDeleteAsync(key).ConfigureAwait(false);
        }
    }
}
