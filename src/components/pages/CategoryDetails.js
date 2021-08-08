import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import SlickSlider from '../SlickSlider'

class CategoryDetails extends React.Component {
    constructor(props){
        super(props)
        this.id = props.match.params.id
        this.state = {
            category: {},
            categories: [],
            loading: false
        }
    }

    getById(id) {
        this.setState({loading: true}, () => {
            axios.get('https://themealdb.com/api/json/v1/1/categories.php').then((res) => {
                let selected = res.data.categories.filter(item => item.idCategory === id)
                this.setState({ categories: res.data.categories, category: selected[0], loading: false })
            }).catch((e) => {
                console.log(e)
            })
        })
    }

    componentDidMount() {
        this.getById(this.id)
    }

    render() {
        return (
            <div className="category-details-component container">
                <div className="row pt-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/'}>Categories</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Detail</li>
                        </ol>
                    </nav>
                </div>
                {this.state.loading ? 
                    <Loading /> :
                    <div className="row mt-3">
                        <div className="col-md-3 mb-auto">
                            <div className="text-center img-wrapper mb-3">
                                <img src={this.state.category.strCategoryThumb} alt={this.state.category.strCategory} className="img-thumbnail" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td className="custom-thead">Name</td>
                                        <td>{this.state.category.strCategory}</td>
                                    </tr>
                                    <tr>
                                        <td className="custom-thead">Description</td>
                                        <td>{this.state.category.strCategoryDescription}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
                <hr />
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="text-center title mb-3">
                            <h5>Check another categories</h5>
                        </div>
                        <SlickSlider data={this.state.categories} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryDetails