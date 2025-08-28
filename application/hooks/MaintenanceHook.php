<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MaintenanceHook
{
    public function check_maintenance()
    {
        $CI =& get_instance();
        $CI->load->database();
        $CI->load->helper('url');
        $CI->load->library('session'); // session kullanımı için

        $current_path = $CI->uri->uri_string();

        // Admin alanıysa zaten müdahale etme
        if (preg_match('/^admin(\/.*)?$/', $current_path)) {
            return;
        }

        // Bakım modu kontrolü
        $row = $CI->db->get('cd_maintenance')->row();

        if ($row && $row->maintenance_mode == 1) {

            // Admin oturumu varsa siteye erişim serbest
            if ($CI->session->userdata('oturum_kaydi')) {
                return;
            }

            // Admin oturumu yoksa bakım ekranı göster
            echo '<!DOCTYPE html>
            <html lang="tr">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Bakım Modu</title>
            </head>
            <body style="
                margin:0;
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                background:#2c2c54;
                color:#f0f0f0;
                font-family: Arial, sans-serif;
                text-align:center;
                padding:20px;
            ">
                <div style="max-width:400px;">
                    <div style="
                        font-size:60px;
                        margin-bottom:20px;
                        line-height:1;
                        color:#ff6b6b;
                    ">🛠️</div>
                    <h1 style="
                        font-size:2.5rem;
                        margin-bottom:10px;
                        font-weight:700;
                    ">Site Bakımda</h1>
                    <p style="
                        font-size:1.1rem;
                        line-height:1.5;
                        color:#d1d1d1;
                        margin-bottom:25px;
                    ">
                        Web sitemizde şu anda bakım çalışması yapılmaktadır.<br>
                        Lütfen daha sonra tekrar kontrol edin.
                    </p>
                </div>
            </body>
            </html>';
            exit;
        }
    }
}
