using System;
using Keyos.Entities;
using Keyos.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace Keyos.Controllers
{
    //[Authorize]
    //[ApiController]
    [Route("api/user")]
    //[Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;




        public UsersController(IUserService userService)
        {
            _userService = userService;


            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
            string apiKey = configuration.GetConnectionString("Stripe");
            //need to hide this key
            StripeConfiguration.SetApiKey(apiKey);


        }

        [AllowAnonymous]
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]User userParam)
        {
            var user = _userService.Authenticate(userParam.Username, userParam.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }
        [HttpPost, Route("processpayment")]
        public IActionResult ProcessPayment([FromBody] Models.Payment.Token token)
        {


            var CustomerOptions = new CustomerCreateOptions
            {
                Description = "Customer for " + token.Email,
                SourceToken = token.Id,
                Email = token.Email,
                PlanId = "plan_EfXRQVA1sN7KXn"
            };

            var service = new CustomerService();
            Customer customer = service.Create(CustomerOptions);

            //Creating a plan for users to pay monthly


            //var PlanOptions = new PlanCreateOptions
            //{
            //    Product = new PlanProductCreateOptions
            //    {
            //        Name = "Premium"
            //    },
            //    Amount = 5000,
            //    Currency = "usd",
            //    Interval = "month",
            //};

            //var PlanService = new PlanService();
            //Plan plan = PlanService.Create(PlanOptions);

            //var items = new List<SubscriptionItemOption> {
            //new SubscriptionItemOption {
            //    PlanId ="Premium"
            // }
            //};
            //var SubscriptionOptions = new SubscriptionCreateOptions
            //{
            //    CustomerId = customer.Id,
            //    Items = items
            //};

            //var SubscriptionService = new SubscriptionService();
            //Subscription subscription = SubscriptionService.Create(SubscriptionOptions);

            return Ok(token);
        }
    }

}
