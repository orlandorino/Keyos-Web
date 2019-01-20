using System;
using Microsoft.EntityFrameworkCore;

namespace Keyos.Models
{
    public class DatabaseContext : DbContext
    {

 
        public DbSet<Login> Logins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=sqlDatabase.db");
        }
    }
}
