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


        [HttpGet, Route("histPortfolio")]
        public IEnumerable<historicalPortfolio> getHistPortfolio(string stockID)
        {
            if (stockID != null)
            {
                return (_context.historicalPortfolio.Where(c => c.Symbol == stockID));
            }

            return null;
        }


        [HttpGet, Route("buySellForecastAccuracyPortfolio")]
        public IEnumerable<buySellForecastAccuracyPortfolio> getBuySellForecastAccuracyPortfolio(string stockID)
        {
            if (stockID != null)
            {
                return (_context.buySellForecastAccuracyPortfolio1.Where(c => c.Symbol == stockID));
            }

            return null;
        }
    }
}
