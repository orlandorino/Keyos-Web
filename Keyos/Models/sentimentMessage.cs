using System;
using System.ComponentModel.DataAnnotations;

namespace Keyos.Models
{
    public class sentimentMessage
    {
        [Key]
        public int ID { get; set; }
        public string Symbol { get; set; }
        public string date { get; set; }
        public string tweet { get; set; }
        public string sentiment { get; set; }

    }
}
