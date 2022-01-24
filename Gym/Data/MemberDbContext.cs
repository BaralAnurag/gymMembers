using Gym.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace Gym.Data
{
    public class MemberDbContext : DbContext
    {
        private readonly IConfiguration _config;
        public MemberDbContext(DbContextOptions<MemberDbContext> options):base(options)
        {
        }

        public DbSet<Member> Members { get; set; }

    }
}