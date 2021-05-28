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

        if(this.state.id === ""){
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
        } else {
            const mhsSelainPilih = this.state.mhs.filter((m) => m.id !== this.state.id).map((filterMhs) => {
                return filterMhs
            }) 

            this.setState({
                mhs: [
                    ...mhsSelainPilih,
                    {
                        id: this.state.mhs.length+1,
                        nama: this.state.nama,
                        npm: this.state.npm,
                        jurusan: this.state.jurusan
                    }
                ]
            })
        }

        

        this.setState({
            nama: "",
            npm: "",
            jurusan: ""
        })
    }

    hapusData = (id) => {
        // console.log("id : ", id);

        const mhsBaru = this.state.mhs.filter((m) => m.id !== id).map((filterMhs) => {
            return filterMhs
        })

        this.setState({
            mhs: mhsBaru
        })
    }
    
    editData = (id) => {
        const pilihMhs = this.state.mhs.filter((m) => m.id === id).map((filterMhs) => {
            return filterMhs
        })

        this.setState({
            nama: pilihMhs[0].nama,
            npm: pilihMhs[0].npm,
            jurusan: pilihMhs[0].jurusan,
            id: pilihMhs[0].id
        })
    }

    render() {
        // console.log(this.state.mhs);
        return (
            <div className="container mt-3">
                <h2 className="text-center">Daftar Mahasiswa</h2>

                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

                <Tabel mhs={this.state.mhs} hapusData={this.hapusData} editData={this.editData}/>
            </div>
        )
    }
}
