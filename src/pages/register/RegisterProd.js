import React from 'react';
import PageDefault from '../../components/PageDefault/';
import { Link } from 'react-router-dom';

const RegisterProd = () => {

    return (
        <PageDefault>
            <h1>Cadastro</h1>
            <Link to="/cadastro/categorias">
                Cadastro de categorias
            </Link>
        </PageDefault>
    );

}

export default RegisterProd;