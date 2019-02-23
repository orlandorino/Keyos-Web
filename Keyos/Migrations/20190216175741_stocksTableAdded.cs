using Microsoft.EntityFrameworkCore.Migrations;

namespace Keyos.Migrations
{
    public partial class stocksTableAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "stocks",
                columns: table => new
                {
                    ID = table.Column<string>(nullable: false),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    open = table.Column<int>(nullable: false),
                    high = table.Column<int>(nullable: false),
                    low = table.Column<int>(nullable: false),
                    close = table.Column<int>(nullable: false),
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "stocks");
        }
    }
}
