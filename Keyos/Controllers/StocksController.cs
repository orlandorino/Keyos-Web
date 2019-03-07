using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Keyos.Models;
using Microsoft.AspNetCore.Authorization;
using Keyos.Entities;
using Keyos.Database;

namespace Keyos.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class StocksController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public StocksController(DatabaseContext context)
        {
            _context = context;
        }

        //original api
        //// GET: api/Stocks
        //[HttpGet]
        //public IEnumerable<Stock> Getstocks()
        //{
        //    return _context.stocks;
        //}

        // GET: api/Stocks?stockID=fb
        [Authorize(Roles = Role.PremiumUser)]
        [HttpGet]
        public IEnumerable<Stock> Getstocks(string stockID)
        {
            if (stockID != null)
            {
                return _context.stocks.Where(c => c.Symbol == stockID);
            }

            return _context.stocks;
        }

        //// GET: api/Stocks/5
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetStock([FromRoute] string id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var stock = await _context.stocks.FindAsync(id);

        //    if (stock == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(stock);
        //}

        //// PUT: api/Stocks/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutStock([FromRoute] string id, [FromBody] Stock stock)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != stock.ID)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(stock).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!StockExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Stocks
        //[HttpPost]
        //public async Task<IActionResult> PostStock([FromBody] Stock stock)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _context.stocks.Add(stock);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetStock", new { id = stock.ID }, stock);
        //}

        //// DELETE: api/Stocks/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteStock([FromRoute] string id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var stock = await _context.stocks.FindAsync(id);
        //    if (stock == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.stocks.Remove(stock);
        //    await _context.SaveChangesAsync();

        //    return Ok(stock);
        //}

        //private bool StockExists(string id)
        //{
        //    return _context.stocks.Any(e => e.ID == id);
        //}
    }
}