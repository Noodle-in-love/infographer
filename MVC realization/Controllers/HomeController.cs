using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Organaizer.Models;

namespace Organaizer.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        [HttpGet]
        public ViewResult Index()
        {
            return View();
        }

        [HttpPost]
        public ViewResult Index(IndexData form)
        {
            if (form.logon.JoinLogin != null && form.logon.JoinPassword != null)
                return View("Logined", form);

            if (form.registration.Login != null && form.registration.Password != null && form.registration.ConfirmPassword != null && form.registration.Email != null)
                return View("RegistrationConfirmed", form);
            else
                return View();
        }
    }
}
