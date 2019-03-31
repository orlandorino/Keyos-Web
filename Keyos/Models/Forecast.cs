using System;
using System.ComponentModel.DataAnnotations;

namespace Keyos.Models
{
    public class Forecast
    {

        [Key]
        public int ID { get; set; }
        public string Symbol { get; set; }
        public string date { get; set; }
        public double price { get; set; }
    
    }
}
