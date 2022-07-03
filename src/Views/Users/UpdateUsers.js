import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './Users.css'
import * as yup from "yup";
import {Modals} from "../../Components/Modal/Modals/Modals";
// import {updateCiroAsync} from "../../Store/CiroSlice/CiroAsync";


export const UpdateUsers = ({show, setShow}) => {

    const UpdateCiroSchema = yup.object().shape({
        total: yup.number().typeError('Sadece Sayı').required(),
        date: yup.string().required('Tarih Giriniz'),
    });

    const payload = useSelector((state) => state.ciro.findCiro)

    const [data, setData] = useState({
        total: '',
        date: '',
    })

    const dispatch = useDispatch()

    const onSubmit = async (payld) => {
        const dta = {
            id: payload.id,
            ...payld
        }
        // await dispatch(updateCiroAsync(dta)) ? setShow(false) : setShow(true)
    }

    const Inputs = [
        {
            name: 'total',
            title: 'Toplam',
            type: 'number',
            value: data.total
        },
        {
            name: 'date',
            title: 'Tarih',
            value: data.date
        }
    ]

    useEffect(() => {
        if (payload !== null) {
            setData(payload)
            setShow(true)
        }
    }, [payload])

    return (
        <Modals
            title="Gelir Güncelle"
            validateSchema={UpdateCiroSchema}
            Inputs={Inputs}
            onSubmit={onSubmit}
            show={show}
            setShow={setShow}
        />
    )
}