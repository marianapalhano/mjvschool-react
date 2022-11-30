import { useState } from "react";
import { Input } from "../../components/Input";
import { Steps } from "./styles";
import { Main } from "../../styles/Main";
import { Form } from "../../styles/Form"

import tsunodeverso from "../../assets/tsunodeverso.svg";

export function Register() {
    const [step, setStep] = useState(1);

    return (
        <Main>
            <img src={tsunodeverso} alt='Logo tsunode verso' /> 

            <Form>
                <fieldset>
                    <legend>Faça seu cadastro:</legend>
                    <Steps step={step}>
                        <div></div>
                        <div></div>
                    </Steps>

                    {
                        step === 1 ?
                        <div>
                            <Input 
                                id='name' 
                                name='name' 
                                label='Name:' 
                                type='text'  
                            />
                            <Input 
                                id='email' 
                                name='email' 
                                label='E-mail:' 
                                type='email'  
                            />
                            <button type="button" onClick={() => setStep(2)}>Próximo</button>
                        </div>
                        :
                        <div>
                            <Input 
                                id='password' 
                                name='password' 
                                label='Senha:' 
                                type='password'  
                            />
                            <Input 
                                id='confirm-password' 
                                name='confirmPassword' 
                                label='Confirmar senha:' 
                                type='password'  
                            />
                            <button type="button"  onClick={() => setStep(1)}>Voltar</button>
                        </div>
                    }
                </fieldset>
            </Form>
        </Main>
    )
}