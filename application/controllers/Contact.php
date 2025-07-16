<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Contact_Model');
        $this->load->library('form_validation');
    }

    public function index()
    {
        $this->load->model('Contact_Model');
        if ($this->session->userdata('oturum_kaydi')) {
            $this->benchmark->mark('start_index');
        }


        $data["mainTittle"] = "İletişim | Andaç Başaran";
        $data["metaDescription"] = "İletişim";
        $data["metaKeywords"] = "andacbasaran,andac,blog,yazilim,basaranandac,php,codeigniter,codeigniter3";
        $this->load->view('front/header', $data);
        $this->load->view('front/contact/contact',$data);
        $this->load->view('front/footer',$data);
    }

    // İletişim Formu AJAX İsteği
    public function postContactForm()
    {
        if ($this->input->post("namesurname") == "") {
            echo json_encode(array("status" => "warning", "tittle" => "Ad ve soyad alanı boş bırakılamaz."));
            exit();
        }
        if ($this->input->post("email") == "") {
            echo json_encode(array("status" => "warning", "tittle" => "E-Posta alanı boş bırakılamaz."));
            exit();
        }
        $this->form_validation->set_rules('email', 'E-Posta', 'required|valid_email');

        if ($this->form_validation->run() == false) {
            echo json_encode(array("status" => "warning", "tittle" => "Geçerli bir e-posta adresi girin."));
            exit();
        }
        if ($this->input->post("subject") == "") {
            echo json_encode(array("status" => "warning", "tittle" => "Konu boş bırakılamaz."));
            exit();
        }
        if ($this->input->post("message") == "") {
            echo json_encode(array("status" => "warning", "tittle" => "Mesaj boş bırakılamaz."));
            exit();
        }

        if (isset($_POST) && !empty($_POST)) {
            $form_data = array(
                'namesurname' => $this->input->post('namesurname', true),
                'email' => $this->input->post('email', true),
                'subject' => $this->input->post('subject', true),
                'message' => $this->input->post('message', true)
            );

            $sonuc = $this->Contact_Model->ekle($form_data);

            if ($sonuc) {
                $this->load->library('email');

                $config['protocol'] = 'smtp';
                $config['smtp_host'] = 'mail.codeos.tr';
                $config['smtp_user'] = 'no-reply@codeos.tr';
                $config['smtp_pass'] = 'kzuZc4jLVx$^asd/81';
                $config['smtp_port'] = '465';
                $config['smtp_crypto'] = 'ssl';
                $config['smtp_timeout'] = '7';
                $config['charset'] = 'utf-8';
                $config['mailtype'] = 'text';
                $config['validate'] = FALSE;
                $config['wordwrap'] = true;

                $alicilar = array(
                    'info@codeos.tr',
                    'andacbasaran69@gmail.com'
                );

                $this->email->initialize($config);
                $this->email->set_newline("\r\n");
                $this->email->to($alicilar);
                $this->email->from('no-reply@codeos.tr' , 'Codeos Digital | İletişim');
                $this->email->subject("Yeni İletişim Formu Bildirimi");

                $emailContent = 'Sizinle iletişime geçmek isteyen birisi var, panelinizi kontrol edin lütfen.' . "\n\n";
                $emailContent .= "Ad ve Soyad: " . $this->input->post('namesurname') . "\n\n";
                $emailContent .= "E-Posta: " . $this->input->post('email') . "\n\n";
                $emailContent .= "Konu: " . $this->input->post('subject') . "\n\n";
                $emailContent .= "Mesaj: " . $this->input->post('message') . "\n\n";

                $this->email->message($emailContent);

                if ($this->email->send()) {
                    echo json_encode(array("status" => "success", "tittle" => "Mesajınız başarı ile gönderildi"));
                } else {
                    echo json_encode(array("status" => "error", "tittle" => "Mesajınız gönderilirken bir hata oluştu."));
                    echo $this->email->print_debugger();
                }
            } else {
                echo json_encode(array("status" => "error", "tittle" => "Mesajınız gönderilirken bir hata oluştu."));
            }
            exit();
        }
    }
}