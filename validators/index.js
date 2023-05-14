import {body} from "express-validator"

export const registerValidation =[
    body('email','Неправильний формат пошти.').isEmail(),
    body('password','Пароль повинен бути мінімум 10 сімволів.').isLength({min: 10}),
]

export const categoryProblemValidation =[
    body('name','Довжина не повинна бути більше 20 символів.').isLength({max: 20}),
]

export const policyValidation =[
    body('label','Довжина не повинна бути більше 25 символів.').isLength({max: 25}),
    body('description','Довжина не повинна бути більше 50 символів.').isLength({max: 10}),
]

