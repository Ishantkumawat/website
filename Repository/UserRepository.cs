using makeyourtrip.Model;
using Microsoft.EntityFrameworkCore;
using Tourism.Model;

namespace makeyourtrip.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ADbContext _dbContext;

        public UserRepository(ADbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddUserAsync(User user)
        {
            var existingUser = await _dbContext.Users.FirstOrDefaultAsync(a => a.UserEmail == user.UserEmail);
            if (existingUser != null)
            {
                throw new ArgumentException("User with the same email already exists");
            }

            _dbContext.Users.Add(user);
            await _dbContext.SaveChangesAsync();
            // Validate the user's role before proceeding with saving.
            if (!IsValidUserRole(user.Role))
            {
                throw new ArgumentException("Invalid user role.");
            }

            try
            {
               

                if (user.Role == "TravelAgency")
                {
                    var travelAgent = new Travelagencies
                    {
                        TravelAgencyName = user.UserName,
                        TravelAgencyPassword = user.Password,
                        TravelAgencyEmail = user.UserEmail,
                        TravelAgencyPhone = user.PhoneNo,
                        TravelAgencyState = user.State,
                        ActiveStatus = user.ApprovalStatus,

                    };
                    _dbContext.Travelagencies.Add(travelAgent);
                }

                else if (user.Role == "Traveller")
                {
                    var traveller = new Travellers
                    {
                        TravellerName = user.UserName,
                        TravellerPassword = user.Password,
                        TravellerEmail = user.UserEmail,
                        TravellerPhone = user.PhoneNo,
                        TravellerState = user.State,

                    };
                    _dbContext.Travellers.Add(traveller);
                }
                else
                {
                    throw new ArgumentException("Invalid user role.");
                }

                await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Handle database-related exceptions or any other exceptions that may occur during the save operation.
                throw new Exception("An error occurred while saving user data.", ex);
            }
        }

        private bool IsValidUserRole(string role)
        {
            // Define valid user roles here.
            string[] validRoles = { "TravelAgency", "Traveller" };

            return Array.Exists(validRoles, r => r.Equals(role, StringComparison.OrdinalIgnoreCase));
        }

        bool IUserRepository.IsValidUserRole(string role)
        {
            throw new NotImplementedException();
        }
    }
}

