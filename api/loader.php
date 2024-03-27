<?php

spl_autoload_register(function ($class) {
    $dirs = array('core', 'models', 'controllers');

    foreach ($dirs as $dir) {
        switch ($dir) {
            case 'controllers':
                $filename = "{$dir}/{$class}.controller.php";
                break;
            case 'models':
                $filename = "{$dir}/{$class}.model.php";
                break;
            default:
                $filename = "{$dir}/{$class}.php";
                break;
        }
        if (file_exists($filename)) include $filename;
    }
});