using AutoMapper;
using Express.DomainModel.Repositories;

namespace Express.CommandHandler
{
    public class CommandHandlerAggregateArgument
    {
        public IMapper Mapper { get; }
        public IUnitOfWork UnitOfWork { get; }

        public CommandHandlerAggregateArgument(IMapper mapper, IUnitOfWork unitOfWork)
        {
            Mapper = mapper;
            UnitOfWork = unitOfWork;
        }
    }
}
