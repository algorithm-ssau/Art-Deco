import React,{ Component } from "react"
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import ReactDOM from "react-dom";
import axios from "axios";

export class App extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            plaster:[],
            fresco:[],
            decor:[],
            paint:[],
            wallpaper:[]
        }
    }

    componentDidMount() {
        axios.get("/product/plaster").then(response => this.setState({plaster: response.data}))
        axios.get("/product/fresco").then(response => this.setState({fresco: response.data}))
        axios.get("/product/decor").then(response => this.setState({decor: response.data}))
        axios.get("/product/paint").then(response => this.setState({paint: response.data}))
        axios.get("/product/wallpaper").then(response => this.setState({wallpaper: response.data}))
    }

    render() {
        const routes = useRoutes(this.state)
        return (
            <Router>
                <div>
                    {routes}
                </div>
            </Router>
        )
    }
}

export class ProductList extends React.Component{
    render() {
        const products = this.props.products.map(product =>
            <Product key={product.id} product={product}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Стиль</th>
                    <th>Картинка</th>
                    <th>Стоимость</th>
                </tr>
                {products}
                </tbody>
            </table>
        )
    }
}

class Product extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td><img src={`data:${this.props.product.contentType};base64, ${this.props.product.image.data}`} width="200" height="200" /></td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("react"));