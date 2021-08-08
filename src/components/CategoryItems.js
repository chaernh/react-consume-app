import React from 'react'
import { Link } from 'react-router-dom'

class CategoryItems extends React.Component {

    render() {
        return (
            <div className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-body">
                        <div className="movie-wrapper">
                            <div className="img-wrapper mb-3">
                                <img src={this.props.category.strCategoryThumb} alt={this.props.category.strCategory} className="img-thumbnail" />
                            </div>
                            <h5 className="card-title">{this.props.category.strCategory}</h5>
                            <p classname="card-text mb-3">{this.props.category.strCategoryDescription.substr(0,70)}</p>
                            <div className="info text-end">
                                <Link className="btn btn-success" to={'/detail'}>Detail</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CategoryItems