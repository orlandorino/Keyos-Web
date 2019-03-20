using Keyos.Database;
using Keyos.Entities;
using Keyos.Helpers;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Keyos.Services
{


    public interface IUserService
    {
        User Authenticate(string username, string password);
        User UpdateRole(int userID);
    }

    public class UserService : IUserService
    {

        private readonly AppSettings _appSettings;

        //adds db
        private DatabaseContext _context;

        public UserService(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;

            //adds db
            _context = new DatabaseContext();
        }

        public User Authenticate(string username, string password)
        {
            var Logins = _context.Logins.ToList();

            var user = Logins.SingleOrDefault(x => x.Username == username && x.Password == password);

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, user.Role)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            // remove password before returning
            user.Password = null;

            //return null;
            return new User
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Username = user.Username,
                Password = user.Password,
                Token = user.Token,
                Role = user.Role,
                Email = user.Email
            };
            //return user;
        }

        public User UpdateRole(int userID)
        {
            var Logins = _context.Logins.ToList();
            var User = Logins.Where(x => x.Id == userID).FirstOrDefault();
            User.Role = "PremiumUser";
            _context.SaveChanges();
            var token = Authenticate(User.Username, User.Password);
            return token;

        }
    }
}
