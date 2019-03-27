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
    public class sentimentController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public sentimentController(DatabaseContext context)
        {
            _context = context;
        }

        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet, Route("sentimentPercentage")]
        public IEnumerable<sentimentPercentage> getSentimentPercentage(string stockID)
        {
            if (stockID != null)
            {
                return _context.sentimentPercentage.Where(c => c.Symbol == stockID);
            }

            return null;
        }

        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet, Route("sentimentMessage")]
        public IEnumerable<sentimentMessage> getSentimentMessage(string stockID)
        {
            if (stockID != null)
            {
                return _context.sentimentMessage.Where(c => c.Symbol == stockID);
            }

            return null;
        }



    }
}
