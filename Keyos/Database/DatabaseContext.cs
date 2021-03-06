﻿using System;
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
        public DbSet<buySellList> buySellTable1 { get; set; }

        public DbSet<ForecastAccuracy> forecastAccuracy { get; set; }
        public DbSet<buySellForecastAccuracy> buySellForecastAccuracy { get; set; }

        //sentiment
        public DbSet<sentimentPercentage> sentimentPercentage { get; set; }
        public DbSet<sentimentMessage> sentimentMessage { get; set; }

        //portfolio
        public DbSet<historicalPortfolio> historicalPortfolio { get; set; }


        //portfolio detailed
        public DbSet<buySellForecastAccuracyPortfolio> buySellForecastAccuracyPortfolio1 { get; set; }

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
