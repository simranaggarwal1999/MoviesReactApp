import React, { Component } from 'react';
import { getGenres } from "../services/GenreService";
import axios from "axios";

class Category extends Component {
    state = {
        genres: [{
            _id: "1",
            name: "All Genres"
        }],
    }
    componentDidMount() {
        axios.get("genres").then(response => {
            console.log(response.data)
            this.setState({ genres: [...this.state.genres, ...response.data.data] })
        });
    }
    render() {
        return (
            <ul className="list-group">
                {this.state.genres.map((objCategory) => {
                    return (<li key={objCategory["_id"]} className="list-group-item" onClick={() => { this.props.categoryChange(objCategory.name) }}>{objCategory.name}</li>);
                })}
            </ul>
        );
    }
}
export default Category;
