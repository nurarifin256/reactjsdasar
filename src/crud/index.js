import React, { Component } from 'react'
import Formulir from './Formulir'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'

export default class Crud extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            makanans: [],
            nama: '',
            deskripsi: '',
            harga: 0,
            id: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // console.log("data : ", this.state);

        this.setState({
            makanans: [
                ...this.state.makanans,
                {
                    id: this.state.makanans.length+1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga
                }
            ]
        })

        this.setState({
            nama: '',
            deskripsi: '',
            harga: 0
        })
    }
    

    render() {
        // console.log(this.state.makanans);
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <Tabel makanans={this.state.makanans} />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
