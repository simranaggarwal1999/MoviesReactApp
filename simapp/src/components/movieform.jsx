import React, { Component } from 'react';
import { saveMovie } from "../services/fakeMoviesService";
class MovieForm extends Component {
    state = {
        _id: "",
        title: "",
        genreId: "",
        numberInStock: "",
        dailyRentalRate: ""
    }
    handleTitleChange = e => {
        console.log(e.currentTarget.value)
        this.setState({ title: e.currentTarget.value });
    }
    handleGenreChange = e => {
        console.log(e.currentTarget.value)
        this.setState({ genreId: e.currentTarget.value });
    }
    handleStockChange = e => {
        console.log(e.currentTarget.value)
        this.setState({ numberInStock: e.currentTarget.value });
    }
    handleRateChange = e => {
        console.log(e.currentTarget.value)
        this.setState({ dailyRentalRate: e.currentTarget.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { title, genreId, numberInStock, dailyRentalRate } = this.state;
        const movie = {
            title: title,
            genreId:genreId,
            numberInStock:numberInStock,
            dailyRentalRate:dailyRentalRate
        }
        saveMovie(movie);
        this.props.history.push("/movies");
        this.setState({ title: "", genreId: "", numberInStock: "", dailyRentalRate: "" })
    }

    render() {
        return (<div className="container m-4">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-7">
                    <label for="Title">Title</label>
                    <input type="text" className="form-control" id="Title" placeholder="Enter Title" onChange={this.handleTitleChange}>
                    </input>
                </div>
                <div class="form-group col-7">
                    <label for="Genre">Genre</label>
                    <select className="form-control" id="Genre" onChange={this.handleGenreChange}>
                        <option value="5b21ca3eeb7f6fbccd471818">Action</option>
                        <option value="5b21ca3eeb7f6fbccd471814">Comedy</option>
                        <option value="5b21ca3eeb7f6fbccd471820">Thriller</option>
                    </select>
                </div>
                <div class="form-group col-7">
                    <label for="Stock">Number in Stock</label>
                    <input type="number" className="form-control" id="Stock" min="5" max="15" placeholder="Enter Number in Stock" onChange={this.handleStockChange}>
                    </input>
                </div>
                <div class="form-group col-7">
                    <label for="Rate">Rate</label>
                    <input type="number" className="form-control" id="Rate" min="1" max="5" placeholder="Enter Rate" onChange={this.handleRateChange}>
                    </input>
                </div>
                <button type="submit" className="btn btn-primary" >Save</button>
            </form>
        </div>);
    }
}

export default MovieForm;