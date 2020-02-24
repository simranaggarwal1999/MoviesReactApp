// imrc
import React, { Component } from 'react';
import { getMovies } from "../services/fakeMoviesService";
import Like from "./like"
import Pagination from "./pagination"
import Category from "./list";
import InputBox from "./InputBox";
import {Link} from"react-router-dom";
// cc
class MovieTable extends Component {
    state = {
        movies: getMovies(),
        limit: 4,
        currentPage: 1,
        currentGenre: "All Genres",
        searchText: ""
    }
    handleDelete = ((movie) => {
        const clonedMovies = [...this.state.movies];
        const filteredMovies = clonedMovies.filter((m) => {
            return m !== movie;
        })
        let cPage = Math.ceil(filteredMovies.length / this.state.limit);
        this.setState({ movies: filteredMovies, currentPage: cPage });

    })
    handleColourChange(movie) {
        const clonedMovies = [...this.state.movies];
        const idx = clonedMovies.indexOf(movie);
        clonedMovies[idx].liked = !clonedMovies[idx].liked;
        this.setState({ movies: clonedMovies });
    }
    pageChange = newpage => {
        console.log(newpage)
        this.setState({ currentPage: newpage })
    }
    handleCategory = Category => {
        console.log(Category);
        this.setState({ currentGenre: Category, currentPage: 1 });
    }
    handleInputChange = e => {
        // console.log(e.currentTarget.value)
        this.setState({ currentGenre:"All Genres",searchText: e.currentTarget.value });
    }
   
    render() {
        let { movies, limit, currentPage, currentGenre, searchText } = this.state;
        if (searchText === "") {
            function genreSelect(movies, currentGenre) {
                let filteredMovies;
                if (currentGenre === "All Genres") {
                    filteredMovies = movies;
                }
                else {
                    filteredMovies = movies.filter((movie) => {
                        return movie["genre"].name === currentGenre;
                    })
                }
                return filteredMovies;
            }
            movies = genreSelect(movies, currentGenre);
        }
        else {
            movies = movies.filter((m) => {
                return m["title"].toLowerCase().startsWith(searchText.toLowerCase());
            })
        }
        function pagination(movies, limit, currentPage) {
            let fpnum = limit * (currentPage - 1);
            let lpnum = limit * (currentPage);
            return movies.slice(fpnum, lpnum);
        };
        let cPageMovies = pagination(movies, limit, currentPage);

        return (
            <React.Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-2">
                            <Category categoryChange={this.handleCategory}></Category>
                        </div>
                        <div className="col-10">
                            <Link to="/movies/new">
                            <button type="button" class="btn btn-primary" >New</button>
                            </Link>
                            <InputBox mytext={this.state.searchText} mychange={this.handleInputChange}></InputBox>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Rate</th>
                                    </tr>
                                    {
                                        cPageMovies.map((movie) => {
                                            return <tr scope="row" key={movie["_id"]}>
                                                <td>{movie.title}</td>
                                                <td>{movie.genre.name}</td>
                                                <td>{movie.numberInStock}</td>
                                                <td>{movie.dailyRentalRate}</td>
                                                <td> <Like liked={movie["liked"]} myfn={() => { this.handleColourChange(movie) }}></Like> </td>
                                                <td><button className="btn btn-danger" onClick={() => { this.handleDelete(movie) }}>Delete</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                            <Pagination limit={limit} size={movies.length} currentPage={currentPage} getPageNumber={this.pageChange}></Pagination>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MovieTable;
