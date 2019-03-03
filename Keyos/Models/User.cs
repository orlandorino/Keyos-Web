using System.ComponentModel.DataAnnotations;

namespace Keyos.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }


        //public int ID { get; set; }
        //public string UserName { get; set; }
        //public string Password { get; set; }
        //public string FirstName { get; set; }
        //public string LastName { get; set; }
        //public string Email { get; set; }
        //public byte[] PasswordHash { get; set; }
        //public byte[] PasswordSalt { get; set; }
        //public string Role { get; set; }
        //public string Token { get; set; }
    }
}
