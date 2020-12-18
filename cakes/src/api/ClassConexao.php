<?php

abstract class  classConexao{

    #conexao com o banco de dados
    protected function conectaDB(){
        try{
            $Con=new PDO("mysql:host=localhost;dbname=cake","root","");
            return $Con;

        }catch(PDOException $Erro){
            return $Erro->getMessage();
        }
    }
}

?>