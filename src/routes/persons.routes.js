import { Router } from "express";

import{getAllPersons} from '../controllers/persons.controller.js';


const router = Router();

/*
 Ordenamos el codigo enviando las funciones al controlador
    router.get('/usuarios',(req, res) => {
    res.send('mostrando Usuarios')
});*/


router.get('/getAllPersons',getAllPersons); 

//Cuando exporto defaultm luego lo puedo llamar con el nombre que quiera
export default router;
