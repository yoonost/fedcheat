<?php

class router {
    public static $routes = array();
    public static $methods = array();
    public static $callbacks = array();

    public static function __callstatic($method, $params) {
        $uri = sprintf("/api/%s", $params[0]);
        $callback = $params[1];
        array_push(self::$routes, $uri);
        array_push(self::$methods, strtoupper($method));
        array_push(self::$callbacks, $callback);
    }

    public static function dispatch() {
        $response = array();
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $method = $_SERVER['REQUEST_METHOD'];
        $foundFunc = false;

        $route_pos = array_keys(self::$routes, $uri);
        foreach ($route_pos as $route) {
            if ($method == 'GET' || $method == 'POST' || $method == 'PUT') {
                $response['success'] = true;
                $foundFunc = true;

                try {
                    $connect = database::initialize();
                    
                    $params = ($method == 'GET') ? $_GET : json_decode(file_get_contents('php://input'), true);
                    $segments = explode('@', end(explode('/', self::$callbacks[$route])));
                    $controller = new $segments[0]($params);
                    $response['response'] = $controller->{$segments[1]}();
                }
                catch (Exception $e) {
                    $response['success'] = false;
                    $response['error'] = $e->getMessage();
                }
            }
        }

        if ($foundFunc == false) {
            $response['success'] = false;
            $response['error'] = 'API method not found';
        }

        return response::create($response);
    }
}