using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace TodoApi.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }
    }
}