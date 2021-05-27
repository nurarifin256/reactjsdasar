import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            makanan: 'Bakso',
            data: {},
            tampilHalSub: false
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => {
            // console.log("halo : ", json);
            this.setState({
                data: json
            })
        })
    }

    ubahMakanan(value) {
        this.setState({
            makanan: value
        })
    }

    render() {
        // console.log("Data : ", this.state.data);
        return (
            <div>
                <h2>{this.state.makanan}</h2>

                {
                    this.state.tampilHalSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />
                }
                <button onClick={() => this.setState({tampilHalSub: !this.state.tampilHalSub})}>Tampilkan Hal Sub Lifecycle</button>
                {/* <h2>{this.state.data.title}</h2> */}
            </div>
        )
    }
}
