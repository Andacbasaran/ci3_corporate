<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['default_controller'] = 'home';

// İletişim Sayfası
$route['iletisim'] = "contact";


$route['blog'] = "blog";
$route['blog/(:any)'] = 'blog/view/$1';


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
$route['admin/blog/ekle'] = 'admin/admin/blog';
$route['admin/createmail'] = 'admin/admin/createmailConfig';
$route['admin/blog/kaydet'] = 'admin/admin/blog/kaydet';

$route['admin/blog'] = 'admin/blog';
$route['admin/blog/delete_blog'] = 'admin/admin/blog/delete_blog';
$route['admin/slider'] = "admin/admin/slider";

// Mail Ayarları
$route['admin/settings/mail'] = 'admin/settings/mailSettings';
$route['admin/settings/mail/update'] = 'admin/settings/mailUpdate';

// Bakım Modu Ayarları
$route['admin/maintenance/'] = 'admin/maintenance';

// İletişim
$route['admin/contact'] = 'admin/contact';
$route['admin/contact/update'] = 'admin/contact/update';
$route['admin/iletisimdetay/(:num)'] = 'admin/admin/iletisimDetay/$1';
$route['admin/iletisimler'] = 'admin/admin/iletisimler';