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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {


        optionsBuilder.UseSqlServer();
        }
    }
}
