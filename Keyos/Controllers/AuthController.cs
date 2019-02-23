using Keyos.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Keyos.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {

        private DatabaseContext _context;

        public AuthController()
        {
            _context = new DatabaseContext();

        }

        // GET api/values
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }


            //access db, get list of users, and check user.
            var Logins = _context.Logins.ToList();


            Boolean checkUser = false;

            foreach (var login in Logins)
            {

                checkUser |= (user.UserName == login.UserName && user.Password == login.Password);

            }

            if (checkUser)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:5000",
                    audience: "http://localhost:5000",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }
        }
        [HttpPost, Route("register")]
        public IActionResult Register([FromBody] User user)
        {
            // Checks if username is taken
            if (_context.Logins.Any(x => x.UserName == user.UserName))
            {
                return Unauthorized();
            }

            _context.Add(new User { UserName = user.UserName, Password = user.Password, Email = user.Email });
            _context.SaveChanges();
            return Ok();
        }
    }
}