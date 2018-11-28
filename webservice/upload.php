<?php
if($_FILES['file']['name'] != ''){
    $test = explode('.', $_FILES['file']['name']);
    $extensao = end($test);    
    $nome = rand(100,999).'.'.$extensao;

    $local = 'uploads/'.$nome;
    move_uploaded_file($_FILES['file']['tmp_name'], $local);

    echo 'Imagem enviada com sucesso!';
}