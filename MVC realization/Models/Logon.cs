using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Organaizer.Models
{
    public class Logon
    {
        [Required(ErrorMessage = "Please enter your name")]
        public string JoinLogin { get; set; }

        [Required(ErrorMessage = "Please enter your password")]
        public string JoinPassword { get; set; }
    }
}