using Microsoft.EntityFrameworkCore.Migrations;

namespace Gym.Migrations
{
    public partial class formatField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "height",
                table: "Members",
                newName: "Height");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Height",
                table: "Members",
                newName: "height");
        }
    }
}
