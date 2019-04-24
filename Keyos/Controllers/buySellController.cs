using Keyos.Database;
using Keyos.Entities;
using Keyos.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Keyos.Controllers


{

    [Route("api/[controller]")]
    [ApiController]
    public class buySellController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public buySellController(DatabaseContext context)
        {
            _context = context;
        }
        //    // GET: api/Stocks?stockID=fb
        //[Authorize(Roles = Role.PremiumUser)]
        //[HttpGet]
        //public IEnumerable<buySellList> Getstocks()
        //{
        //    return _context.buySellTable.Where(c => c.Symbol == "aapl");

        //}
        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet, Route("forecastList")]
        public IEnumerable<Forecast> getForecast(string stockID)
        {
            if (stockID != null)
            {
                return _context.forecastTable1.Where(c => c.Symbol == stockID);
            }

            return null;
        }

        // GET: api/Stocks?stockID=fb
        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet, Route("buySellList")]
        public IEnumerable<buySellList> Getstocks(string stockID)
        {
            if (stockID != null)
            {
                return _context.buySellTable1.Where(c => c.Symbol == stockID);
            }

            return null;
        }

        // GET: api/Stocks?stockID=fb
        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet, Route("buySellLatest")]
        public buySellList getSingleBuySell(string stockID)
        {
            if (stockID != null)
            {
                var temp = _context.buySellTable1.OrderByDescending(d => d.date).Where(c => c.Symbol == stockID).First();

                return temp;
            }

            return null;
        }


        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet, Route("forecastAccuracyList")]
        public IEnumerable<ForecastAccuracy> getForecastAccuracy(string stockID)
        {
            if (stockID != null)
            {
                return _context.forecastAccuracy.Where(c => c.Symbol == stockID);
            }

            return null;
        }


        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet, Route("buySellForecastAccuracyList")]
        public IEnumerable<buySellForecastAccuracy> getForecastBuySellAccuracy(string stockID)
        {
            if (stockID != null)
            {
                return _context.buySellForecastAccuracy.Where(c => c.Symbol == stockID);
            }

            return null;
        }


        [AllowAnonymous]
        [HttpGet, Route("stocksNotEpoch")]
        public IEnumerable<stockNotEpoch> getStocksNotEpoch(string stockID)
        {
            if (stockID != null)
            {
                return _context.stocksNotEpoch.Where(c => c.Symbol == stockID && (DateTime.Parse(c.date) >= DateTime.Parse("2015-12-31") && (DateTime.Parse(c.date) <= DateTime.Parse("2018-01-31"))));
            }

            return null;
        }





    }
}