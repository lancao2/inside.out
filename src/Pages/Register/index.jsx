import Emojes from "../../Components/Emojes";
import { DivHome } from "../home/styles";
import { DivForm, Input, Button } from "../Login/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";



const Registerschema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("email is required").matches( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    password: yup.string().required("Password is required").min(6),
    confirmPassword: yup.string().required("Please confirm your password").oneOf([yup.ref("password")], "Password must match"),
  })
  .required();

 

const RegisterPage = () => {


  const newUser = data => registerUser(data)

  const registerUser = (data) => {
    
    axios.post(`UrlBase/register`,{
      username : data.username,
      mail: data.email,
      password: data.password,
      headers: "application/json"
    }).then(console.log(data)).catch(err => console.log(err))
  
  } 

   
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(Registerschema),
  });


    let history = useHistory();
    function handleClick() {
    history.push("/login");
    }

   

    return(
        <DivHome>
            <DivForm onSubmit={handleSubmit(newUser)}>
                <h1>Registro</h1>
                {
                !errors.username ?
                 <Input><FontAwesomeIcon color="#0494E5" icon={faUser}/><input {...register("username")} type="text" placeholder="Usuario"/></Input> : 
                 <Input error={true}><FontAwesomeIcon color="red" icon={faUser}/><input {...register("username")} type="text" placeholder={errors.username?.message}/></Input>}
                {
                !errors.email ? 
                <Input><FontAwesomeIcon color="#0494E5" icon={faEnvelope}/><input {...register("email")}type="text" placeholder="Email"/></Input> : 
                <Input error={true}><FontAwesomeIcon color="red" icon={faEnvelope}/><input {...register("email")}type="text" placeholder={errors.email?.message}/></Input>
                }
                {
                !errors.password ? <Input><FontAwesomeIcon color="#0494E5" icon={faLock}/><input {...register("password")} type="password" placeholder="Password"/></Input> :
                <Input error={true}><FontAwesomeIcon color="red" icon={faLock}/><input {...register("password")} type="password" placeholder={errors.password?.message}/></Input>
                }
                {
                !errors.confirmPassword ?    
                    <Input><FontAwesomeIcon color="#0494E5" icon={faLock}/><input type="password" {...register("confirmPassword")} placeholder="Comfirm Password"/></Input> : <Input error={true}><FontAwesomeIcon color="red" icon={faLock}/><input type="password" {...register("confirmPassword")} placeholder={errors.confirmPassword?.message}/></Input>}
                <div className="buttons"> 
                <Button>Registrar-se</Button>
                <Button className="back" onClick={handleClick}><FontAwesomeIcon color="#ffffff" icon={faArrowLeft}/></Button>
                </div>
            </DivForm>
            <Emojes/>
        </DivHome>
    )
}

export default RegisterPage