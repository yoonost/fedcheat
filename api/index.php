<?php

require_once "loader.php";

// router::connect('account', 'account@validate');

router::connect('auth/login', 'auth@login');
router::connect('auth/register', 'auth@register');
router::connect('auth/logout', 'auth@logout');

router::dispatch();