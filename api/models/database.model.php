<?php

class database {
    public static function initialize() {
		try {
            $json = json_decode(file_get_contents('models/database.model.json'), true);

            $database = new PDO("mysql:dbname={$json['tabl']};host={$json['host']}", $json['user'], $json['pass'], array (PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8mb4'"));
            $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $database->exec("set names utf8mb4");

            return $database;
		}
		catch(PDOException $e) {
            response::create([
                'success' => false,
                'error' => 'Not connection database'
            ]);
		}
    }
}