using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gym.Data;
using Gym.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gym.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MembersController : Controller
    {
        private readonly MemberDbContext context;

        public MembersController(MemberDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Member> GetAllMembers()
        {
            return context.Members.OrderBy(members => members.Id).ToList().OrderByDescending(members => members.StartDate);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult>GetMemberById(int id)
        {
            var memberInDb = await context.Members.FindAsync(id);

            if (memberInDb == null)
            {
                return NotFound();
            } else {

                return Ok(memberInDb);
            }



        }
        
        [HttpPost]
        public async Task<IActionResult> AddMember([FromBody]Member member)
        {
            context.Add(member);
            await context.SaveChangesAsync();
            return Ok(member);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMember(Member member, int id)
        {
            var memberInDb = await context.Members.FindAsync(id);

            if(memberInDb != null){
                
                memberInDb.FullName = member.FullName;
                memberInDb.StartDate = member.StartDate;
                memberInDb.Height = member.Height;
                memberInDb.Weight = member.Weight;

                await context.SaveChangesAsync();
                return Ok(member);
            } else {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(int id)
        {
            var member = await context.Members.FindAsync(id);
            if (member == null)
            {
                return NotFound();
            }

            context.Members.Remove(member);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}