import React from 'react'

const makanan = [
    {
        nama: 'soto',
        harga: 12000
    },
    {
        nama: 'mie ayam',
        harga: 10000
    },
    {
        nama: 'pecel ayam',
        harga: 18000
    },
    {
        nama: 'nasi goreng',
        harga: 8000
    }
]

// reduce
// cara 1
// const total_bayar = makanan.reduce((total_harga, makanan) => {
//     return total_harga + makanan.harga; 
// }, 0)

// cara 2
const total_bayar = makanan.reduce((total_harga, makanan) => 
    total_harga + makanan.harga, 0);

const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanan.map((makanans, index) => (
                    <li>{index + 1} {makanans.nama} - Harga {makanans.harga}</li>
                ))}
            </ul>

            <h3>Total Harga : {total_bayar}</h3>

            <h2>Map filter harga lebih dari 11.000 </h2>
            <ul>
                {makanan.filter((makanan) => makanan.harga > 11000).map((makanans, index) => (
                    <li>{index + 1} {makanans.nama} - Harga {makanans.harga}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Map
