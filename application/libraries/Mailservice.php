<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MailService
{
    protected $CI;

    public function __construct()
    {
        $this->CI =& get_instance();
        $this->CI->load->library('email');
        $this->CI->load->model('MailSettings_Model');

        $settings = $this->CI->MailSettings_Model->getSettings();

        $config = [
            'protocol'      => $settings->protocol,
            'smtp_host'     => $settings->smtp_host,
            'smtp_user'     => $settings->smtp_user,
            'smtp_pass'     => $settings->smtp_pass,
            'smtp_port'     => $settings->smtp_port,
            'smtp_crypto'   => $settings->smtp_crypto,
            // Sabit kalan ayarlar
            'smtp_timeout'  => 7,
            'charset'       => 'utf-8',
            'mailtype'      => 'text',
            'validate'      => FALSE,
            'wordwrap'      => TRUE
        ];

        $this->CI->email->initialize($config);
    }

    public function send_contact_mail($data = [])
    {
        $this->CI->load->model('MailSettings_Model');
        $settings = $this->CI->MailSettings_Model->getSettings();
        
        $this->CI->email->set_newline("\r\n");
        $this->CI->email->to(['info@codeos.tr', 'andacbasaran69@gmail.com']);
        $this->CI->email->from($settings->smtp_user, 'Codeos Digital | İletişim Formu');
        $this->CI->email->subject("Yeni İletişim Formu Bildirimi");

        $msg  = "Sizinle iletişime geçmek isteyen birisi var, panelinizi kontrol edin lütfen.\n\n";
        $msg .= "Ad ve Soyad: {$data['namesurname']}\n";
        $msg .= "E-Posta: {$data['email']}\n";
        $msg .= "Konu: {$data['subject']}\n";
        $msg .= "Mesaj: {$data['message']}\n";
        $msg .= "IP Adresi: {$data['ip']}\n";

        $this->CI->email->message($msg);

        return $this->CI->email->send();
    }
}
