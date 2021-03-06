import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulir = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
    return (
        <div className="mt-5">
            <row>
                    <h2>{id ? "Edit Data" : "Tambah Data"}</h2>
                    <hr />
            </row>
            <row>
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group controlId="nama">
                            <Form.Label>Nama Makanan</Form.Label>
                            <Form.Control type="text" placeholder="masukan nama makanan" name="nama" value={nama}
                            onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group controlId="deskripsi">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control as="textarea" rows={3} name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group controlId="harga">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type="number" placeholder="masukan harga makanan" name="harga" value={harga} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </row>
        </div>
    )
}

export default Formulir
