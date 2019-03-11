﻿using Keyos.Database;
using Keyos.Entities;
using Keyos.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
                return _context.forecastTable.Where(c => c.Symbol == stockID);
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
                return _context.buySellTable.Where(c => c.Symbol == stockID);
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
                var temp = _context.buySellTable.OrderBy(d => d.date).Where(c => c.Symbol == stockID).First();

                return temp;
            }

            return null;
        }



    }
}