package com.jin.oh.moviedb.controller;

import com.jin.oh.moviedb.model.Movie;
import com.jin.oh.moviedb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Jin Oh
 */
@RestController
@RequestMapping("/v1/movies")
@CrossOrigin()
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getMovies(@RequestParam(required = false) String keyword) {
        if (keyword != null) {
            return movieService.getMoviesByKeyword(keyword);
        }
        return movieService.getMovies();
    }

}
