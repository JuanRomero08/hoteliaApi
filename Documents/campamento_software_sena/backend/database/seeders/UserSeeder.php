<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use File;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       //Paso 1: Leer archivo users.json
       $json=File::get("database/_data/users.json");

       //Paso 2:Convertir el contenifp json a un arreglo en php
       $arreglo=json_decode($json);

       //Paso 3:Recorrer el arreglo en php
       foreach ($arreglo as $usuario) {
       
       //Paso 4: Por cada uno de los elemenos del arreglo crear user
       
       $u = new User();
       $u->name= $usuario->name;
       $u->email= $usuario->email;
       $u->password = Hash::make($usuario->password);
       $u->save();
       }
       
    
    }
}
