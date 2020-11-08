using AutoMapper;
using Microsoft.Extensions.Caching.Distributed;
using System.Data;

namespace Express.Infrastructure.Repositories
{
    public class RepositoryAggregateArgument
    {
        public IDbConnection DbConnection { get; }
        public DataContext Context { get; }
        public IMapper Mapper { get; }
        public IDistributedCache Cache { get; }

        public RepositoryAggregateArgument(
            IDbConnection dbConnection,
            DataContext context,
            IMapper mapper,
            IDistributedCache cache
            )
        {
            DbConnection = dbConnection;
            Context = context;
            Mapper = mapper;
            Cache = cache;
        }
    }
}
