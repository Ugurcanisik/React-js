import {Button, Modal} from 'react-bootstrap';
import {AddCiro} from "./AddCiro";
import {useDispatch, useSelector} from "react-redux";
import {createContext, useState} from "react";
import swal from 'sweetalert';
import DataTable from 'react-data-table-component'
import './Ciro.css'
import {deleteCiroAsyncCiro} from "../../Store/CiroSlice/CiroSlice";
import {findCiro} from "../../Store/CiroSlice/CiroSlice";
import {UpdateCiro} from "./UpdateCiro";
import {Forms} from "../../Components/Form/Form";


export const Context = createContext()

export const Ciro = ({title}) => {


    const [show, setShow] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const dispatch = useDispatch()
    const {ciro} = useSelector((state) => state.ciro)


    const columns = [
        {
            name: 'Toplam',
            center: true,
            selector: row => row.total,
            sortable: true,
        },
        {
            name: 'Tarih',
            center: true,
            selector: row => row.date,
            sortable: true,
        },
        {
            selector: row => row.id,
            name: 'Actions',
            cell: (data) => (
                <>
                    <Button
                        onClick={() => {
                            dispatch(findCiro(data))
                        }}
                        className="btn btn-link btn-primary btn-lg"
                    >
                        <i className="fa fa-edit"/>
                    </Button>
                    <Button
                        onClick={() => {
                            swal({
                                title: 'Silmek İstediğinize Emin Misiniz ?',
                                text: "Bu İşlem Geri Alınamaz",
                                type: 'warning',
                                buttons: {
                                    confirm: {
                                        text: 'Evet, Sil!',
                                        className: 'btn btn-primary'
                                    },
                                    cancel: {
                                        visible: true,
                                        className: 'btn btn-danger'
                                    }
                                }
                            }).then((Delete) => {
                                if (Delete) {
                                    const value = dispatch(deleteCiroAsyncCiro(data.id))
                                    if (value) {
                                        swal({
                                            title: 'Silindi!',
                                            icon: "success",
                                            type: 'success',
                                            buttons: {
                                                confirm: {
                                                    className: 'btn btn-success'
                                                }
                                            }
                                        });
                                    } else {
                                        swal({
                                            title: 'Hata!',
                                            icon: "error",
                                            buttons: {
                                                confirm: {
                                                    className: 'btn btn-danger'
                                                }
                                            },
                                        });
                                    }

                                } else {
                                    swal.close();
                                }
                            });
                        }}
                        className="btn btn-link btn-danger"
                    >
                        <i className="fa fa-times"/>
                    </Button>
                </>
            ),
            format: (row, index) => {
                alert(row)
            },
            center: true,
            style: {},
        }
    ];


    return (
        <>

            <div className="panel-header bg-primary-gradient">
                <div className="page-inner py-5">
                    <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 className="text-white pb-2 fw-bold">{title}</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="title-fix">
                <br/>
                <Button className="btn-round ml-auto" variant="primary" onClick={() => {
                    setShow(true)
                }}>
                    <i className="fa fa-plus"/>
                    &nbsp; Ciro Ekle
                </Button>
                <br/><br/>
            </div>




            <AddCiro show={show} setShow={setShow}/>
            {/*<UpdateCiro show={showUpdateModal} setShow={setShowUpdateModal}/>*/}

            <div style={{margin: '10px'}}>

                <DataTable
                    noHeader
                    direction="auto"
                    highlightOnHover
                    pagination
                    // progressPending={pending}
                    // progressComponent={<CustomLoader/>}
                    columns={columns}
                    data={ciro}
                />
            </div>
        </>
    )
}