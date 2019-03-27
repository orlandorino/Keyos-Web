using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Keyos.Migrations
{
    public partial class buySellForecast : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "buySellTable1",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    dateNonEpoch = table.Column<string>(nullable: true),
                    price = table.Column<int>(nullable: false),
                    buySell = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_buySellTable1", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "forecastAccuracy",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    price = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_forecastAccuracy", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "forecastTable1",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    price = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_forecastTable1", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Logins",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Role = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "sentimentMessage",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    tweet = table.Column<string>(nullable: true),
                    sentiment = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sentimentMessage", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "sentimentPercentage",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    positive = table.Column<double>(nullable: false),
                    negative = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sentimentPercentage", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "stocks",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    open = table.Column<int>(nullable: false),
                    high = table.Column<int>(nullable: false),
                    low = table.Column<int>(nullable: false),
                    close = table.Column<int>(nullable: false),
                    volume = table.Column<int>(nullable: false),
                    unadjustedVolume = table.Column<int>(nullable: false),
                    change = table.Column<int>(nullable: false),
                    changePercent = table.Column<int>(nullable: false),
                    vwap = table.Column<int>(nullable: false),
                    label = table.Column<string>(nullable: true),
                    changeOverTime = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_stocks", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "stocksNotEpoch",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    open = table.Column<int>(nullable: false),
                    high = table.Column<int>(nullable: false),
                    low = table.Column<int>(nullable: false),
                    close = table.Column<int>(nullable: false),
                    volume = table.Column<int>(nullable: false),
                    unadjustedVolume = table.Column<int>(nullable: false),
                    change = table.Column<int>(nullable: false),
                    changePercent = table.Column<int>(nullable: false),
                    vwap = table.Column<int>(nullable: false),
                    label = table.Column<string>(nullable: true),
                    changeOverTime = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_stocksNotEpoch", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "buySellTable1");

            migrationBuilder.DropTable(
                name: "forecastAccuracy");

            migrationBuilder.DropTable(
                name: "forecastTable1");

            migrationBuilder.DropTable(
                name: "Logins");

            migrationBuilder.DropTable(
                name: "sentimentMessage");

            migrationBuilder.DropTable(
                name: "sentimentPercentage");

            migrationBuilder.DropTable(
                name: "stocks");

            migrationBuilder.DropTable(
                name: "stocksNotEpoch");
        }
    }
}
