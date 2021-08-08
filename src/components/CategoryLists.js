import React from 'react'
import axios from 'axios'

class CategoryLists extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        axios.get('https://themealdb.com/api/json/v1/1/categories.php').then((res) => {
            this.setState({ categories: res.data.categories })
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <div className="movielist-component container">
                <div className="row mt-3">
                    { this.state.categories.map(category => 
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="movie-wrapper">
                                    <div className="img-wrapper mb-3">
                                        <img src={category.strCategoryThumb} alt={category.strCategory} className="img-thumbnail" />
                                    </div>
                                    <h5 className="card-title">{category.strCategory}</h5>
                                    <p class="card-text mb-3">{category.strCategoryDescription.substr(0,70)}</p>
                                    <div className="info text-end">
                                        <button className="btn btn-success">Detail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}


export default CategoryLists