import './Ciro.css'
import * as yup from "yup";
import {Modals} from "../../Components/Modal/Modals/Modals";
import {useDispatch} from "react-redux";
import {Context} from './Ciro'
import {addAsyncCiro} from "../../Store/CiroSlice/CiroSlice";
import {Alert} from "../../Components/Alert/Alert";


export const AddCiro = ({show, setShow}) => {


    const dispatch = useDispatch()
    const addCiroSchema = yup.object().shape({
        total: yup.number().typeError('Sadece Sayı').required(),
        date: yup.string().required('Tarih Giriniz'),
    });


    const onSubmit = (data,event) => {
        if (dispatch(addAsyncCiro(data))) {
            Alert({type: 'success', message: 'Ekleme Başarılı'})
            // setShow(false)
        } else {
            Alert({type: 'error', message: 'Ekleme Hatalı'})
            // setShow(true)
        }
    };

    const Inputs = [
        {
            name: 'total',
            title: 'Toplam',
            type: 'number'
        },
        {
            name: 'date',
            title: 'Tarih',
        }
    ]


    const ContextProvider = ({children}) => {
        return (
            <Context.Provider value={{
                show, setShow, title: 'Gelir Ekle', Inputs, schema: addCiroSchema, onSubmit
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