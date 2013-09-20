using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Organaizer.Models
{
    public class Registration
    {
        [Required(ErrorMessage = "Please enter your email address")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please enter your name")]
        public string Login { get; set; }

        [Required(ErrorMessage = "Please enter your password")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Please repeat your password")]
        [CompareAttribute("Password", ErrorMessage = "Your password & repeating aren't equal")]        
        public string ConfirmPassword { get; set; }
    }
}