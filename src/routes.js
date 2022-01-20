//Importar as dependências
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar as páginas
import Homepage from './pages/Homepage/Homepage.js';
import FormStudy from './pages/Form-study/Form-study.js';



//Criar o componentes com as rotas
function RoutesCaio() { 
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/form-study" element={<FormStudy/>} />     
            </Routes>              
        </BrowserRouter>
    );
};

export default RoutesCaio;