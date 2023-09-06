using Microsoft.AspNetCore.Mvc;

namespace CitiesAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext _context;
        public CityController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<City>>> Get()
        {
            return Ok(await _context.Cities.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<List<City>>> CreateCity(City city)
        {
            _context.Cities.Add(city);
            await _context.SaveChangesAsync();

            return Ok(await _context.Cities.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<City>>> DeleteCity(int id)
        {
            var dbCity = await _context.Cities.FindAsync(id);
            if (dbCity == null) return BadRequest("City not found.");
            _context.Remove(dbCity);
            await _context.SaveChangesAsync();

            return Ok(await _context.Cities.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<City>>> UpdateCity(City city)
        {
            var dbCity = await _context.Cities.FindAsync(city.Id);
            if (dbCity == null) return BadRequest("City not found.");
            dbCity.Name = city.Name;
            dbCity.Population = city.Population;
            dbCity.Longitude = city.Longitude;
            dbCity.Latitude = city.Latitude;
            await _context.SaveChangesAsync();

            return Ok(await _context.Cities.ToListAsync());
        }
    }
}
