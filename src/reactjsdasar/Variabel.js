import React from 'react'

// const itu tidak bisa diubah
// const harga = 3000;
// const harga = 400;

// var bisa diubah
var harga = 20000;
// var harga = 40000; harga terupadte
if(true){
    var harga = 30000; //harga terupadte
}

// let
// let harga = 20000;
// harga = 40000; //harga terupdate
// if(true){
    // let tidak bisa diakses didalam scope
    // let harga = 30000; harga tidak terupdate
    // harga = 30000; //harga terupdate
// }

const Variabel = () => {
    return (
        <div>
            <h2>Harga : {harga}</h2>
        </div>
    )
}

export default Variabel;
