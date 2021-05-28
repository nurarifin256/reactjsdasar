import React, { Component } from 'react'
import Formulir from './Formulir'
import Tabel from './Tabel'

export default class index extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            mhs: [],
            nama: "",
            npm: "",
            jurusan: "",
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
            mhs: [
                ...this.state.mhs,
                {
                    id: this.state.mhs.length+1,
                    nama: this.state.nama,
                    npm: this.state.npm,
                    jurusan: this.state.jurusan
                }
            ]
        })

        this.setState({
            nama: "",
            npm: "",
            jurusan: ""
        })
    }
    

    render() {
        // console.log(this.state.mhs);
        return (
            <div className="container mt-3">
                <h2 className="text-center">Daftar Mahasiswa</h2>

                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

                <Tabel mhs={this.state.mhs} />
            </div>
        )
    }
}
