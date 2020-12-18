<?php
include ("ClassConexao.php");

class ClassTblproduto extends ClassConexao{
     //exibicao dos produtos em um json
    public function exibeTblproduto ()
    {
        $BFectch=$this->conectaDB()->prepare("select * from tbl_produtos");
        $BFectch->execute();
        $J=[];
        $I=0;

        while($Fetch=$BFectch->fetch( PDO::FETCH_ASSOC)){
            $J[$I]=[  
                "cod_produto"=>$Fetch['cod_produto'],
                "nome_produto"=>$Fetch['nome_produto'],
                "descricao"=>$Fetch['descricao'],
                "preco"=>$Fetch['preco'],
                "nome_imagem"=>$Fetch['nome_imagem'],
            ];
            $I++;
        }

      header("Access-Control-Allow-Origin:*");
      header("Content-type: aplication/json");
    
      echo json_encode($J);
    }
}

?>