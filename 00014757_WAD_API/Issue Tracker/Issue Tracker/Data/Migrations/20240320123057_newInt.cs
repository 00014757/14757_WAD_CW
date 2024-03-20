using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Issue_Tracker.Data.Migrations
{
    public partial class newInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Rank",
                table: "Issues",
                type: "int",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Rank",
                table: "Issues",
                type: "float",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
