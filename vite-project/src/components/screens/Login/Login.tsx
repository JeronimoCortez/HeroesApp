import { Button, Form } from "react-bootstrap"
import styles from './Login.module.css'
import { FormEvent, useState } from "react"
import { useForm } from "../../../redux/hooks/useForm"
import { useAppDispatch } from "../../../redux/hooks/redux"
import { setLogin } from "../../../redux/slice/auth"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const [showPass, setShowPass] = useState(false)

  const {values, handleChange} = useForm({
    user:"",
    password:""
  })

  const {
    user,
    password
  } = values;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/user.json');
    const usersData = await response.json();
    const userFound = usersData.users.find((u: {userName: string, password: string }) => u.userName === user && u.password === password)

    if (userFound) {
      dispatch(setLogin(user));
      navigate("/");
    } else{
      alert("Usuario o contraseña incorrectos")
    }
  }

  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>

        <span style={{ fontSize: "10vh" }} className="material-symbols-outlined">
          person
        </span>

        <Form onSubmit={handleSubmitForm}>
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control onChange={handleChange} name="user" 
            value={user}
            type="text" placeholder="Usuario" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={password}
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Contraseña" />
          </Form.Group>
          <Form.Check
            onChange={() => {
              setShowPass(!showPass);
            }}
            type="switch"
            id="custom-switch"
            label="Mostrar contraseña"
          />
          <div className="d-flex justify-content-center align-items-center mt-2">
            <Button 
            type="submit" variant="primary">Ingresar</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

