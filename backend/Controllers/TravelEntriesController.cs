// backend/Controllers/TravelEntriesController.cs
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TravelEntriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TravelEntriesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TravelEntry>>> GetAll()
        {
            return await _context.TravelEntries.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TravelEntry>> Get(int id)
        {
            var entry = await _context.TravelEntries.FindAsync(id);
            if (entry == null)
                return NotFound();
            return entry;
        }

        [HttpPost]
        public async Task<ActionResult<TravelEntry>> Create(TravelEntry entry)
        {
            _context.TravelEntries.Add(entry);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = entry.Id }, entry);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, TravelEntry entry)
        {
            if (id != entry.Id) return BadRequest();

            _context.Entry(entry).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var entry = await _context.TravelEntries.FindAsync(id);
            if (entry == null) return NotFound();

            _context.TravelEntries.Remove(entry);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
