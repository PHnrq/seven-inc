import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup
    .string('Digite um nome')
    .required('O nome é obrigatório')
  ,
  document: yup
    .string('Digite o CPF')
    .matches(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/, 'CPF inválido')
    .required('CPF obrigatório'),
  email: yup
    .string('Digite um email')
    .email('Digite um email valido')
    .required('Email é obrigatório'),
  phone: yup
    .string('Digite um telefone')
    // .matches(/^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/, 'Telefone invalido')
    .required('O telefone é obrigatório')
  ,
  // birth_date: yup
  //   .date()
  //   .required()
  // ,
  salary: yup
    .string('Informe o valor do salario')
    .matches(/^\$?[\d,]+(\.\d*)?$/, 'Valor invalido')
    .required()
  ,
  // created_At: yup
  // .date()
  // .required()
});
