using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace makeyourtrip.Migrations
{
    /// <inheritdoc />
    public partial class Migrations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Adminis",
                columns: table => new
                {
                    IId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Images = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adminis", x => x.IId);
                });

            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    BookingId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TourId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    No_Of_Persons = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.BookingId);
                });

            migrationBuilder.CreateTable(
                name: "Tours",
                columns: table => new
                {
                    TourId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TravelAgencyId = table.Column<int>(type: "int", nullable: false),
                    TravelAgencyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourCountry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourState = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourCity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Itenary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type_of_package = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PackagePrice = table.Column<int>(type: "int", nullable: false),
                    Extra_Person_Price = table.Column<int>(type: "int", nullable: false),
                    AgencyImages = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tours", x => x.TourId);
                });

            migrationBuilder.CreateTable(
                name: "Travelagencies",
                columns: table => new
                {
                    TraveAgencyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TravelAgencyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravelAgencyEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravelAgencyCountry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravelAgencyState = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravelAgencyCity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravelAgencyPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravelAgencyPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ActiveStatus = table.Column<bool>(type: "bit", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Travelagencies", x => x.TraveAgencyId);
                });

            migrationBuilder.CreateTable(
                name: "Travellers",
                columns: table => new
                {
                    TravellerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TravellerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravellerEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravellerState = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravellerCity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravellerPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TravellerPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Travellers", x => x.TravellerId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ApprovalStatus = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Adminis");

            migrationBuilder.DropTable(
                name: "Bookings");

            migrationBuilder.DropTable(
                name: "Tours");

            migrationBuilder.DropTable(
                name: "Travelagencies");

            migrationBuilder.DropTable(
                name: "Travellers");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
