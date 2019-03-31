using System;
using System.ComponentModel.DataAnnotations;

namespace Keyos.Models
{
    public class sentimentPercentage
    {
        [Key]
        public int ID { get; set; }
        public string Symbol { get; set; }
        public string date { get; set; }
        public double positive { get; set; }
        public double negative { get; set; }

    }
}
