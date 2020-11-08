using AutoMapper;
using Express.DomainModel.Commands.Securities;
using Express.DomainModel.Models.AggregateModels;
using Express.DomainModel.Models.Securities;
using System.Linq;

namespace Express.DomainModel
{
    public class AutoMapperDomainModelProfile : Profile
    {
        public AutoMapperDomainModelProfile()
        {
            CreateMap<CreateRoleCommand, AggregateRole>()
                .ForMember(dest => dest.Role, opt => opt.MapFrom((src, dest) => new Role { Name = src.Name, Description = src.Description }))
                .ForMember(dest => dest.Permissions, opt => opt.MapFrom((src, dest) => src.PermissionIds.Select(x => new RolePermission { RoleId = dest.Role.Id, PermissionId = x })));
            CreateMap<UpdateRoleCommand, AggregateRole>()
                .ForMember(dest => dest.Role, opt => opt.MapFrom((src, dest) => new Role { Id = src.Id, Name = src.Name, Description = src.Description }))
                .ForMember(dest => dest.Permissions, opt => opt.MapFrom((src, dest) => src.PermissionIds.Select(x => new RolePermission { RoleId = src.Id, PermissionId = x })));
        }
    }
}
