﻿using System;
using Microsoft.EntityFrameworkCore;

namespace Keyos.Models
{
    public class DatabaseContext : DbContext
    {

 
        public DbSet<User> Logins { get; set; }

        public DbSet<Stock> stocks { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=sqlDatabase.db");
        }
    }
}
