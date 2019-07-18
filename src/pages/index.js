import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

class IndexPage extends React.Component {
    state = {
        movie: undefined,
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        const apiCall = await fetch(
            `https://api.themoviedb.org/3/movie/550?api_key=9c2eaa5059825028da6ae6210bb7a7d2`
        )

        const response = await apiCall.json()

        this.setState({
            movie: response.original_title,
        })

        console.log(response.original_title)
    }

    render() {
        return (
            <Layout>
                <Link to="/series/">Go to Series</Link>
                <h2>{this.state.movie}</h2>
            </Layout>
        )
    }
}

export default IndexPage
