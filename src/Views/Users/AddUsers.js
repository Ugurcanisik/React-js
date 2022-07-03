import './Users.css'
import * as yup from "yup";
import {Modals} from "../../Components/Modal/Modals/Modals";
import {useDispatch} from "react-redux";
import {Context} from "../Ciro/Ciro";
import {addAsyncUser} from "../../Store/UsersSlice/UsersSlice";


export const AddUsers = ({show, setShow}) => {


    const dispatch = useDispatch()
    const addUserSchema = yup.object().shape({
        username: yup.string().required('username req'),
        password: yup.string().required('password req'),
        name: yup.string().required('name req'),
    });


    const onSubmit = async (data) => {
        data.role = '{ciro:true,users:true}'
        await dispatch(addAsyncUser(data)) ? setShow(false) : setShow(true);
    };

    const Inputs = [
        {
            name: 'name',
            title: 'Name',
        }, {
            name: 'username',
            title: 'Kullanıcı Adı',
        },
        {
            name: 'password',
            title: 'Parola',
            type: 'password'
        }
    ]


    const ContextProvider = ({children}) => {
        return (
            <Context.Provider value={{
                show, setShow, title: "Kullanıcı Ekle", Inputs, schema: addUserSchema, onSubmit
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