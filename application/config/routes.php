<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['default_controller'] = 'home';

// İletişim Sayfası
$route['iletisim'] = "contact";


$route['blog'] = "blog";
$route['hakkimda'] = "home/hakkimda";
$route['admin'] = "admin/admin";
$route['uploads/(.+)'] = '$1'; // uploads yolu


// Admin
$route['admin/login'] = "admin/login";
$route['admin/logout'] = "admin/admin/logout";
$route['admin/homeedit'] = "admin/admin/homeedit";
$route['admin/getCpuLoad'] = "admin/admin/getCpuLoad";
$route['admin/measureMemoryUsage'] = "admin/admin/measureMemoryUsage";
$route['admin/getOnlineUsers'] = "admin/admin/getOnlineUsers";
$route['admin/iletisimdetay/(:num)'] = 'admin/admin/iletisimDetay/$1';
$route['admin/iletisim'] = 'admin/admin/iletisim';
$route['admin/iletisimler'] = 'admin/admin/iletisimler';
$route['admin/blog/ekle'] = 'admin/admin/blog';
$route['admin/createmail'] = 'admin/admin/createmailConfig';
$route['admin/pagespeed'] = 'admin/admin/pagespeed';
$route['admin/blog/kaydet'] = 'admin/admin/blog/kaydet';
$route['admin/blog'] = 'admin/admin/bloglar';
$route['admin/blog/delete_blog'] = 'admin/admin/blog/delete_blog';
$route['admin/slider'] = "admin/admin/slider";