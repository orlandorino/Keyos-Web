﻿using Keyos.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using System.Linq;
using System.Collections;

namespace Keyos.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {



        // GET api/values
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]Login user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }


            //access db, get list of users, and check user.
            var db = new DatabaseContext();

            var Logins = db.Logins.ToList();

            Boolean checkUser = false;

            foreach( var login in  Logins)
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
    }
}