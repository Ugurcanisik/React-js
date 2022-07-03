import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './Ciro.css'
import * as yup from "yup";
import {Modals} from "../../Components/Modal/Modals/Modals";
import {Context} from "./Ciro";
import {updateCiroAsyncCiro} from "../../Store/CiroSlice/CiroSlice";
import {Alert} from "../../Components/Alert/Alert";


export const UpdateCiro = ({show, setShow}) => {


    const UpdateCiroSchema = yup.object().shape({
        total: yup.number().typeError('Sadece Sayı').required(),
        date: yup.string().required('Tarih Giriniz'),
    });

    let payload = useSelector((state) => state.ciro.findCiro)

    const [data, setData] = useState({
        total: '',
        date: '',
    })

    const dispatch = useDispatch()

    const onSubmit = async (paylo) => {
        const updateCiro = {
            id: payload[0].id,
            ...paylo
        }

        if (dispatch(updateCiroAsyncCiro(updateCiro))) {
            Alert({type: 'success', message: 'Güncelleme Başarılı'})
            setShow(false)
        } else {
            Alert({type: 'error', message: 'Güncelleme Hatalı'})
            setShow(true)
        }
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
        payload = []
    }, [])

    useEffect(() => {
        if (payload.length > 0) {
            setData(payload[0])
            setShow(true)
        }
    }, [payload])


    const ContextProvider = ({children}) => {
        return (
            <Context.Provider value={{
                type: 'updateModal', title: 'Gelir Güncelle', Inputs, schema: UpdateCiroSchema, onSubmit
            }}>
                {children}
            </Context.Provider>
        )
    }


    return (
        <ContextProvider>
            <Modals/>
        </ContextProvider>
    )
}