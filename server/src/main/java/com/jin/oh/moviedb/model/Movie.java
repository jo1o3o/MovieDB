package com.jin.oh.moviedb.model;

/**
 * @author Jin Oh
 */
public class Movie {

    private String title;
    private int year;
    private double rating;
    private MovieType type;

    public Movie(String title, int year, double rating, MovieType type) {
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public MovieType getType() {
        return type;
    }

    public void setType(MovieType type) {
        this.type = type;
    }

    public enum MovieType {
        ACTION,
        ROMANCE,
        THRILLER,
        HORROR,
        COMEDY,
        DRAMA
    }

}
