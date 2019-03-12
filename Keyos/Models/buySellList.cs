using System;
using System.ComponentModel.DataAnnotations;

namespace Keyos.Models
{
    public class buySellList
    {
        [Key]
        public int ID { get; set; }
        public string Symbol { get; set; }
        public string date { get; set; }
        public int price { get; set; }
        public string buySell { get; set; }
    }
}
