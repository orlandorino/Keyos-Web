using System;
using System.ComponentModel.DataAnnotations;

namespace Keyos.Models
{
    public class historicalPortfolio
    {
        [Key]
        public int ID { get; set; }
        public string Symbol { get; set; }
        public int year { get; set; }
        public double buyHoldResult { get; set; }
        public double mlResult { get; set; }
    }
}
