using makeyourtrip.Model;
using Tourism.Model;

namespace makeyourtrip.Repository
{
    public interface IUserRepository
    {
        Task AddUserAsync(User user);
        bool IsValidUserRole(string role);
    }

    public interface ITravelAgentRepository
    {
        Task AddTravelAgentAsync(Travelagencies travelAgent);
    }

    public interface ITravellerRepository
    {
        Task AddTravellerAsync(Travellers traveller);
    }
   
    
}
