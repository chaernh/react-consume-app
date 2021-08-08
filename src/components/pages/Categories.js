import React from 'react'
import axios from 'axios'

import CategoryItems from '../CategoryItems'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            loading: false
        }
    }

    getAll() {
        axios.get('https://themealdb.com/api/json/v1/1/categories.php').then((res) => {
            this.setState({ categories: res.data.categories })
        }).catch((e) => {
            console.log(e)
        })
    }

    componentDidMount() {
        this.getAll()
    }

    render() {
        return (
            <div className="movielist-component container">
                <div className="row mt-3">
                    { this.state.categories.map(category => 
                        <CategoryItems category={category} key={category.idCategory} />
                    )}
                </div>
            </div>
        )
    }
}


export default Categories