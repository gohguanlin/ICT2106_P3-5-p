using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace YouthActionDotNet.Migrations
{
    /// <inheritdoc />
    public partial class Feedback : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Feedback",
                columns: table => new
                {
                    FeedbackId = table.Column<string>(type: "TEXT", nullable: false),
                    FeedbackType = table.Column<string>(type: "TEXT", nullable: true),
                    FeedbackMessage = table.Column<string>(type: "TEXT", nullable: true),
                    FeedbackStatus = table.Column<string>(type: "TEXT", nullable: true),
                    FeedbackDateTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ServiceCenterId = table.Column<string>(type: "TEXT", nullable: true),
                    ServiceCenterName = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedback", x => x.FeedbackId);
                    table.ForeignKey(
                        name: "FK_Feedback_ServiceCenter_ServiceCenterId",
                        column: x => x.ServiceCenterId,
                        principalTable: "ServiceCenter",
                        principalColumn: "ServiceCenterId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Feedback_ServiceCenterId",
                table: "Feedback",
                column: "ServiceCenterId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Feedback");
        }
    }
}
