using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Keyos.Database;
using Keyos.Entities;
using Keyos.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Keyos.Controllers
{
    [Route("api/[controller]")]
    public class historicalPortfolioController : ControllerBase
    {


        private readonly DatabaseContext _context;

        public historicalPortfolioController(DatabaseContext context)
        {
            _context = context;
        }


        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet, Route("histPortfolio")]
        public IEnumerable<historicalPortfolio> getHistPortfolio(string stockID)
        {
            if (stockID != null)
            {
                return (_context.historicalPortfolio.Where(c => c.Symbol == stockID));
            }

            return null;
        }




        //// GET: api/values
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
