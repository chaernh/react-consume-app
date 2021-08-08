import React from 'react'

class CategoryItems extends React.Component {

    detail(id) {
        console.log(id)
    }

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
                                <button className="btn btn-success" onClick={() => this.detail(this.props.category.idCategory)}>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CategoryItems