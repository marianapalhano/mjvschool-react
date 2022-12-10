import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    surname: yup.string().required('Sobrenome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
    title: yup.string().optional(),
    password: yup.string()
        .matches(/[A-Z]/, 'Deve conter pelo menos 1 letra maiúscula')
        .matches(/[a-z]/, 'Deve conter pelo menos 1 letra minúscula')
        .matches(/(\d)/, 'Deve conter pelo menos 1 número')
        .matches(/(\W|_)/, 'Deve conter pelo menos 1 caractere especial')
        .matches(/.{8,}/, 'Deve conter no mínimo 8 caracteres')
        .required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'A confirmação de senha deve ser igual à senha')
}).required();