<?php

class auth {
    private $params;
    private $database;
    private $response = [];

    public function __construct ($params, $database) {
        $this->params = $params;
        $this->database = $database;
    }

    public function login () {

    }

    public function register () {

    }

    public function logout () {

    }
}