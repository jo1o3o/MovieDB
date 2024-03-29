package com.jin.oh.moviedb.service;

import com.jin.oh.moviedb.model.Movie;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

/**
 * @author Jin Oh
 */
@Service
public class MovieService {

    List<Movie> movies = Arrays.asList(
            new Movie("Argylle", 2024, 6, Movie.MovieType.THRILLER, "argylle.jpg"),
            new Movie("Mr. & Mrs. Smith", 2024, 7, Movie.MovieType.ACTION, "mr_and_mrs_smith.jpg"),
            new Movie("How to Have Sex", 2023, 6.5, Movie.MovieType.DRAMA, "how_to_have_sex.jpg"),
            new Movie("Orion and the Dark", 2024, 6.4, Movie.MovieType.COMEDY, "orion_and_the_dark.jpg"),
            new Movie("Genius", 2017, 8.2, Movie.MovieType.DRAMA, "genius.jpg"),
            new Movie("Spider-Man", 2002, 7.3, Movie.MovieType.ACTION, "spiderman.jpg"),
            new Movie("Spider-Man 2", 2004, 7.3, Movie.MovieType.ACTION, "spiderman2.jpg"),
            new Movie("Spider-Man 3", 2007, 6.4, Movie.MovieType.ACTION, "spiderman3.jpg")
    );

    public List<Movie> getMovies() {
        return movies;
    }

    public List<Movie> getMoviesByKeyword(String keyword) {
        return movies.stream().filter(movie -> movie.getTitle().toLowerCase().contains(keyword.toLowerCase())).toList();
    }

}
