<?php

// Mise en place de la Base de Donnée

$mysqlClient = new PDO(
    'mysql:host=mysql-ochs.alwaysdata.net;dbname=ochs_testuser;charset=utf8',
    'ochs',
    'Tapuje(5',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION],
);

// Récupération des valeurs


$Nom = $_POST['Name'];
$Prenom = $_POST['Surname'];
$Email = $_POST['Email'];
$Password = $_POST['MdP'];

// Préparation de la requête

$Query = 'INSERT INTO `Blog-user`(`Name`, `Surname`, `Email`, `MdP` ) VALUES ( :Name , :Surname, :Email , :MdP )';
$Statement = $mysqlClient->prepare($Query);
$Statement->execute(
    array(
        "Name" => $Name,
        "Surname" => $Surname,
        "Email" => $Email,
        "MdP" => $MdP
           )
);

// echo "Inscrpition validée !"
?>
