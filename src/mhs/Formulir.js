import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Formulir = ({nama, npm, jurusan, handleChange, handleSubmit}) => {
    return (
        <div className="mt-3 mb-3">
            <Row>
                <Col></Col>
                <Col xs={8}>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="nama">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" name="nama" placeholder="Masukan nama mahasiswa" value={nama} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group controlId="npm">
                            <Form.Label>Npm</Form.Label>
                            <Form.Control type="number" name="npm" placeholder="Masukan npm mahasiswa" value={npm} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group controlId="jurusan">
                            <Form.Label>Jurusan</Form.Label>
                            <Form.Control as="select" name="jurusan" value={jurusan} onChange={(event) => handleChange(event)}>
                                <option>Pilih Jurusan</option>
                                <option>SI</option>
                                <option>TI</option>
                                <option>SIA</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Tambah
                        </Button>
                        
                    </Form>

                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Formulir
