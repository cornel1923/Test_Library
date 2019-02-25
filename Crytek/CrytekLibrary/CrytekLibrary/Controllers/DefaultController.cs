using Microsoft.AspNetCore.Mvc;

namespace CrytekLibrary.Controllers
{
    public class DefaultController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}