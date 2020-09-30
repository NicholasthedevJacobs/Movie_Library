using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            var getMovies = _context.Movies.ToList();
            // Retrieve all movies from db logic
            return Ok(getMovies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {


            var getMovieById = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            // Retrieve movie by id from db logic
            // return Ok(movie);
            return Ok(getMovieById);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            
            _context.Movies.Add(value);
            _context.SaveChanges();
            return Ok(value);
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {                                                                                   
            // Update movie in db logic
            _context.Movies.Where(m => m.MovieId == movie.MovieId).SingleOrDefault();
            _context.Update(movie);
            _context.SaveChanges();
            return Ok(movie);
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            var movieToRemove = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            _context.Remove(movieToRemove);
            _context.SaveChanges();
            return Ok();
        }
    }
}