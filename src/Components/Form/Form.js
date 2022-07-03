import {Form} from "react-bootstrap";
import {Input} from "../Input/Input";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {FooterModal} from "../Modal/FooterModal/FooterModal";
import {useContext} from "react";
import {Context} from "../../Views/Ciro/Ciro";


export const Forms = () => {

    const {schema,onSubmit,Inputs} = useContext(Context)
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm({resolver: yupResolver(schema)});


    return (
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            {Inputs.map(({name, type, value, title}) => (
                <Input
                    key={name}
                    name={name}
                    type={type}
                    value={value}
                    title={title}
                    register={register}
                    errors={errors}
                />
            ))}
            <FooterModal />
        </Form>
    )
}