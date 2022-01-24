using System;
using System.ComponentModel.DataAnnotations;

namespace Gym.Models
{
    public class Member
    {

        public int Id { get; set; }
        
        [Required]
        public string FullName { get; set; }
        public DateTime StartDate { get; set; }
        public int Weight { get; set; }
        public int Height { get; set; }
        
    }
}