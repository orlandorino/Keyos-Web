using System;
using System.ComponentModel.DataAnnotations;

namespace Keyos.Models
{
    public class stockNotEpoch
    {
        [Key]
        public int ID { get; set; }
        public string Symbol { get; set; }
        public string date { get; set; }
        public int open { get; set; }
        public int high { get; set; }
        public int low { get; set; }
        public int close { get; set; }
        public int volume { get; set; }
        public int unadjustedVolume { get; set; }
        public int change { get; set; }
        public int changePercent { get; set; }
        public int vwap { get; set; }
        public string label { get; set; }
        public int changeOverTime { get; set; }
    }
}
