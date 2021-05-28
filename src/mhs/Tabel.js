import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';

const Tabel = ({mhs, editData, hapusData}) => {
    // console.log(mhs);
    return (
        <Row>
            <Col></Col>
            <Col xs={8}>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Npm</th>
                        <th>Jurusan</th>
                        <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mhs.map((m, index) => {
                                return (
                                    <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{m.nama}</td>
                                    <td>{m.npm}</td>
                                    <td>{m.jurusan}</td>
                                    <td>

                                    <button className="btn btn-warning mr-2" onClick={() => editData(m.id)}>Edit</button>

                                    <button className="btn btn-danger" onClick={() => hapusData(m.id)}>Hapus</button>

                                    </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            </Col>
            <Col></Col>
        </Row>
    )
}

export default Tabel
