using System;
using Microsoft.EntityFrameworkCore;
using Keyos.Models;
using Microsoft.Extensions.Configuration;

namespace Keyos.Database
{
    public class DatabaseContext : DbContext
    {

 
        public DbSet<User> Logins { get; set; }

        public DbSet<Stock> stocks { get; set; }

        public DbSet<stockNotEpoch> stocksNotEpoch { get; set; }

        public DbSet<Forecast> forecastTable1 { get; set; }

        public DbSet<ForecastAccuracy> forecastAccuracy { get; set; }

        //public DbSet<buySellList> buySellTable { get; set; }
        public DbSet<buySellList> buySellTable1 { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DBConnectionString"));

        }
    }
}
