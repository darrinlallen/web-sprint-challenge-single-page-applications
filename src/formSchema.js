import * as yup from 'yup'
const schema = yup.object().shape({
    user: yup.string().min(2, 'name must be at least 2 characters') })
    
    