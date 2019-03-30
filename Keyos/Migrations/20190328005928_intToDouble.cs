using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Keyos.Migrations
{
    public partial class intToDouble : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "price",
                table: "buySellTable1",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.CreateTable(
                name: "buySellForecastAccuracy",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Symbol = table.Column<string>(nullable: true),
                    date = table.Column<string>(nullable: true),
                    price = table.Column<int>(nullable: false),
                    buySell = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_buySellForecastAccuracy", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "buySellForecastAccuracy");

            migrationBuilder.AlterColumn<int>(
                name: "price",
                table: "buySellTable1",
                nullable: false,
                oldClrType: typeof(double));
        }
    }
}
