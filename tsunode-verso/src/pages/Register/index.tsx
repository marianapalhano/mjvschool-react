import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../../components/Input";
import { Steps } from "./styles";
import { Main } from "../../styles/Main";
import { Button } from "../../styles/Button";
import { FormStep } from "../../styles/FormStep";

import tsunodeverso from "../../assets/tsunodeverso.svg";

interface IRegisterData {
    name: string;
    surname: string;
    title: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export function Register() {
    const [step, setStep] = useState(1);
    const { register, handleSubmit } = useForm<IRegisterData>();

    function registerUser(data: IRegisterData) {

    }

    return (
        <Main>
            <img src={tsunodeverso} alt='Logo tsunode verso' /> 

            <FormStep step={step} onSubmit={handleSubmit(registerUser)}>
                <fieldset>
                    <legend>Faça seu cadastro:</legend>

                    <Steps step={step}>
                        <div/>
                        <div/>
                    </Steps>

                <p>Preencha os seus dados pessoais</p>

                <div className="steps-container">
                    <div>
                        <Input 
                            id='name' 
                            label='Name:' 
                            type='text'  
                            {...register('name')}
                           />
                        <Input 
                            id='surname' 
                            label='Sobrenome:' 
                            type='text'
                            {...register('surname')}
                        />
                        <Input 
                            id='title' 
                            label='Título (opcional):' 
                            type='text'
                            {...register('title')}
                        />
                        <Button type="button" variant='primary' onClick={() => setStep(2)}>Próximo</Button>
                    </div>
                    
                    <div>
                        <Input 
                            id='email'  
                            label='E-mail:' 
                            type='email'  
                            {...register('email')}
                        />
                        <Input 
                            id='password' 
                            label='Senha:' 
                            type='password'  
                            {...register('password')}
                        />
                        <Input 
                            id='confirm-password' 
                            label='Confirmar senha:' 
                            type='password'  
                            {...register('confirmPassword')}
                        />
                        <Button type="submit" variant='primary'>Concluir</Button>
                        <Button type="button" variant='inline' onClick={() => setStep(1)}>Voltar</Button>
                    </div>
                </div>                
                </fieldset>
            </FormStep>
        </Main>
    )
}