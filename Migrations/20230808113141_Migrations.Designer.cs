﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Tourism.Model;

#nullable disable

namespace makeyourtrip.Migrations
{
    [DbContext(typeof(ADbContext))]
    [Migration("20230808113141_Migrations")]
    partial class Migrations
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Tourism.Model.Admin", b =>
                {
                    b.Property<int>("IId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IId"));

                    b.Property<string>("Images")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IId");

                    b.ToTable("Adminis");
                });

            modelBuilder.Entity("Tourism.Model.Booking", b =>
                {
                    b.Property<int>("BookingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BookingId"));

                    b.Property<int>("No_Of_Persons")
                        .HasColumnType("int");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.Property<int>("TourId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("BookingId");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("Tourism.Model.Tour", b =>
                {
                    b.Property<int>("TourId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TourId"));

                    b.Property<byte[]>("AgencyImages")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Extra_Person_Price")
                        .HasColumnType("int");

                    b.Property<string>("Itenary")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PackagePrice")
                        .HasColumnType("int");

                    b.Property<string>("TourCity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TourCountry")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TourName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TourState")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TravelAgencyId")
                        .HasColumnType("int");

                    b.Property<string>("Type_of_package")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TourId");

                    b.ToTable("Tours");
                });

            modelBuilder.Entity("Tourism.Model.Travelagencies", b =>
                {
                    b.Property<int>("TraveAgencyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TraveAgencyId"));

                    b.Property<bool>("ActiveStatus")
                        .HasColumnType("bit");

                    b.Property<string>("TravelAgencyCity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravelAgencyCountry")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravelAgencyEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravelAgencyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravelAgencyPassword")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravelAgencyPhone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravelAgencyState")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("TraveAgencyId");

                    b.HasIndex("UserId");

                    b.ToTable("Travelagencies");
                });

            modelBuilder.Entity("Tourism.Model.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<bool>("ApprovalStatus")
                        .HasColumnType("bit");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPhone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("makeyourtrip.Model.Travellers", b =>
                {
                    b.Property<int>("TravellerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TravellerId"));

                    b.Property<string>("TravellerCity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravellerEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravellerName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravellerPassword")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravellerPhone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TravellerState")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("TravellerId");

                    b.ToTable("Travellers");
                });

            modelBuilder.Entity("Tourism.Model.Travelagencies", b =>
                {
                    b.HasOne("Tourism.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}
