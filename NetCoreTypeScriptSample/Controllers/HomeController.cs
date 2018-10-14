using Microsoft.AspNetCore.Mvc;
using NetCoreTypeScriptSample.ViewModels;
using System.Linq;

namespace NetCoreTypeScriptSample.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddUser(UserViewModel user)
        {
            string fullName = $"Fullname: {user.Name} {user.Surname}";
            return Json(new { fullName = fullName});
        }
    }
}