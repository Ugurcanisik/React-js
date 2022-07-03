import {useState} from "react";
import {useDispatch} from "react-redux";
import {Login} from "../../Store/AuthSlice/AuthSlice";

export const Auth = () => {


    const dispatch = useDispatch()

    const [user, setUser] = useState({
        username: '',
        password: ''
    })


    const onLogin = () => {
        dispatch(Login(user))
    }

    return (
        <div className="margin: 100px auto; width: 500px">
            <div className="form-group form-floating-label">
                <input
                    onChange={(e) => {
                        setUser({...user, username: e.target.value})
                    }}
                    id="userName"
                    type="text" className="form-control input-border-bottom" required/>
                <label className="placeholder">Kullanıcı Adı</label>
            </div>

            <br/>
            <div className="form-group form-floating-label">
                <input onChange={(e) => {
                    setUser({...user, password: e.target.value})
                }} id="password" type="password" className="form-control input-border-bottom" required/>
                <label className="placeholder">Parola Adı</label>
            </div>
            <button onClick={onLogin} className="login">Giriş
            </button>
        </div>
    )
}