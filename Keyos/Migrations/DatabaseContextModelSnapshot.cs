﻿// <auto-generated />
using Keyos.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Keyos.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Keyos.Models.buySellForecastAccuracy", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<string>("buySell");

                    b.Property<string>("date");

                    b.Property<int>("price");

                    b.HasKey("ID");

                    b.ToTable("buySellForecastAccuracy");
                });

            modelBuilder.Entity("Keyos.Models.buySellForecastAccuracyPortfolio", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<string>("buySell");

                    b.Property<string>("forecastDate");

                    b.Property<double>("forecastprice");

                    b.Property<string>("futureDate");

                    b.Property<double>("futurePrice");

                    b.HasKey("ID");

                    b.ToTable("buySellForecastAccuracyPortfolio1");
                });

            modelBuilder.Entity("Keyos.Models.buySellList", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<string>("buySell");

                    b.Property<string>("date");

                    b.Property<string>("dateNonEpoch");

                    b.Property<double>("price");

                    b.HasKey("ID");

                    b.ToTable("buySellTable1");
                });

            modelBuilder.Entity("Keyos.Models.Forecast", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<string>("date");

                    b.Property<double>("price");

                    b.HasKey("ID");

                    b.ToTable("forecastTable1");
                });

            modelBuilder.Entity("Keyos.Models.ForecastAccuracy", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<string>("date");

                    b.Property<double>("price");

                    b.HasKey("ID");

                    b.ToTable("forecastAccuracy");
                });

            modelBuilder.Entity("Keyos.Models.historicalPortfolio", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<double>("buyHoldResult");

                    b.Property<double>("mlResult");

                    b.Property<int>("year");

                    b.HasKey("ID");

                    b.ToTable("historicalPortfolio");
                });

            modelBuilder.Entity("Keyos.Models.sentimentMessage", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<string>("date");

                    b.Property<string>("sentiment");

                    b.Property<string>("tweet");

                    b.HasKey("ID");

                    b.ToTable("sentimentMessage");
                });

            modelBuilder.Entity("Keyos.Models.sentimentPercentage", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<string>("date");

                    b.Property<double>("negative");

                    b.Property<double>("positive");

                    b.HasKey("ID");

                    b.ToTable("sentimentPercentage");
                });

            modelBuilder.Entity("Keyos.Models.Stock", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<int>("change");

                    b.Property<int>("changeOverTime");

                    b.Property<int>("changePercent");

                    b.Property<int>("close");

                    b.Property<string>("date");

                    b.Property<int>("high");

                    b.Property<string>("label");

                    b.Property<int>("low");

                    b.Property<int>("open");

                    b.Property<int>("unadjustedVolume");

                    b.Property<int>("volume");

                    b.Property<int>("vwap");

                    b.HasKey("ID");

                    b.ToTable("stocks");
                });

            modelBuilder.Entity("Keyos.Models.stockNotEpoch", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Symbol");

                    b.Property<int>("change");

                    b.Property<int>("changeOverTime");

                    b.Property<int>("changePercent");

                    b.Property<int>("close");

                    b.Property<string>("date");

                    b.Property<int>("high");

                    b.Property<string>("label");

                    b.Property<int>("low");

                    b.Property<int>("open");

                    b.Property<int>("unadjustedVolume");

                    b.Property<int>("volume");

                    b.Property<int>("vwap");

                    b.HasKey("ID");

                    b.ToTable("stocksNotEpoch");
                });

            modelBuilder.Entity("Keyos.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("Role");

                    b.Property<string>("Token");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Logins");
                });
#pragma warning restore 612, 618
        }
    }
}
