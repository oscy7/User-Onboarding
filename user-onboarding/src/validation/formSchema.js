import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Enter a username, Hero!')
        .min(3, 'must be atleast 3 characters long'),
    email: yup
        .string()
        .email('Must enter an email')
        .required('must enter an email'),
    password: yup
        .string()
        .required('enter pw')
        .min(10, 'must be 10 char. long'),
    tos: yup 
        .boolean()
        .oneOf([true], 'must check the tos. Being a Hero is dangerous work!')

})

export default formSchema; 