<?php

class method {
    public static function sendRequest($browse, array $content = [], $post = false) {
        $ch = curl_init();
        if ($post) {
            curl_setopt($ch, CURLOPT_URL, $browse);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($content));
        } else {
            curl_setopt($ch, CURLOPT_URL, $browse . '?' . http_build_query($content) );
        }
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        return json_decode($result, 1);
    }
}