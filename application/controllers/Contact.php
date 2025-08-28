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

        $data["companyData"] = $this->Contact_Model->get_company();

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
        $this->load->library('form_validation');
        $this->load->library('mailservice');
        $this->load->model('Contact_Model');

        $this->form_validation->set_rules('namesurname', 'Ad Soyad', 'required|trim');
        $this->form_validation->set_rules('email', 'E-Posta', 'required|valid_email|trim');
        $this->form_validation->set_rules('subject', 'Konu', 'required|trim');
        $this->form_validation->set_rules('message', 'Mesaj', 'required|trim');

        if ($this->form_validation->run() == FALSE) {
            echo json_encode([
                "status" => "warning",
                "tittle" => validation_errors('<div>', '</div>')
            ]);
            return;
        }

        // Form verilerini al
        $form_data = [
            'namesurname' => $this->input->post('namesurname', TRUE),
            'email'       => $this->input->post('email', TRUE),
            'subject'     => $this->input->post('subject', TRUE),
            'message'     => $this->input->post('message', TRUE),
            'ip'          => $this->input->ip_address()
        ];

        // Veritabanına kayıt
        if ($this->Contact_Model->ekle($form_data)) {

            // Mail gönder
            $mail_sent = $this->mailservice->send_contact_mail($form_data);

            if ($mail_sent) {
                echo json_encode([
                    "status" => "success",
                    "tittle" => "Mesajınız başarıyla gönderildi."
                ]);
            } else {
                echo json_encode([
                    "status" => "error",
                    "tittle" => "Mesaj kaydedildi fakat e-posta gönderilemedi."
                ]);
            }

        } else {
            echo json_encode([
                "status" => "error",
                "tittle" => "Veritabanına kayıt sırasında bir hata oluştu."
            ]);
        }
    }
}