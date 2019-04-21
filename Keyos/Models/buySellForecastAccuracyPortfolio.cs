using System;
using System.ComponentModel.DataAnnotations;

namespace Keyos.Models
{
    public class buySellForecastAccuracyPortfolio
    {
        [Key]
        public int ID { get; set; }
        public string Symbol { get; set; }
        public string forecastDate { get; set; }
        public double forecastprice { get; set; }
        public string buySell { get; set; }
        public string futureDate { get; set; }
        public double futurePrice { get; set; }


    }
}

