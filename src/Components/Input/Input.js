import {Form} from "react-bootstrap";
export const Input = ({name, title, type = 'text', value = '', errors, register}) => {

    return (
        <Form.Group className={`form-group form-floating-label ${errors[name] ? 'has-error' : ''} `}>

            <input
                type={type}
                defaultValue={value}
                required
                className="form-control input-border-bottom"
                {...register(name)}
            />
            <Form.Label className="placeholder">{title}</Form.Label>
            {errors[name] && <p>{errors[name].message}</p>}
        </Form.Group>
    )
}