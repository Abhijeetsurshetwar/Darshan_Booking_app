using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using System.Linq;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("/[controller]/[action]")]
    public class AccomodationController : Controller
    {
        public static readonly p06_shreedarshanContext db;

        static AccomodationController()
        {
            db = new p06_shreedarshanContext();
        }

        [HttpGet]
        public IActionResult getAccomodation()
        {
            return Ok(from a in db.Accomodations
                      select new
                      {
                          a.Address,
                          a.Aid,
                          a.Name,
                          a.Availability,
                          a.Contactno
                      });
        }

        [HttpGet("{id}")]
        public IActionResult GetAccomodationById(int id)
        {
            var accomodation = db.Accomodations.FirstOrDefault(a => a.Aid == id);
            if (accomodation == null)
            {
                return NotFound(new { Message = "Accomodation not found" });
            }

            return Ok(new
            {
                accomodation.Address,
                accomodation.Aid,
                accomodation.Name,
                accomodation.Availability,
                accomodation.Contactno
            });
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAccomodation(int id)
        {
            var accomodation = db.Accomodations.FirstOrDefault(a => a.Aid == id);
            if (accomodation == null)
            {
                return NotFound(new { Message = "Accomodation not found" });
            }

            db.Accomodations.Remove(accomodation);
            db.SaveChanges();

            return Ok(new { Message = "Accomodation deleted successfully" });
        }

        [HttpPost]
        public IActionResult InsertAccomodation([FromBody] Accomodation accomodation)
        {
            if (accomodation == null)
            {
                return BadRequest(new { Message = "Invalid accomodation data" });
            }

            db.Accomodations.Add(accomodation);
            db.SaveChanges();

            return Ok(new { Message = "Accomodation inserted successfully" });
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAccomodation(int id, [FromBody] Accomodation updatedAccomodation)
        {
            var accomodation = db.Accomodations.FirstOrDefault(a => a.Aid == id);
            if (accomodation == null)
            {
                return NotFound(new { Message = "Accomodation not found" });
            }

            accomodation.Address = updatedAccomodation.Address;
            accomodation.Name = updatedAccomodation.Name;
            accomodation.Availability = updatedAccomodation.Availability;
            accomodation.Contactno = updatedAccomodation.Contactno;

            db.SaveChanges();

            return Ok(new { Message = "Accomodation updated successfully" });
        }
    }
}
