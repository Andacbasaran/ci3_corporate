<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Settings extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('MailSettings_Model');

        // Admin kontrolü yap
        if (!$this->session->userdata('oturum_kaydi')) {
            redirect(base_url("admin/login"));
            exit();
        }
    }

    public function index()
    {
        $this->load->view('admin/header');
        $this->load->view('admin/settings');
        $this->load->view('admin/footer');
    }
    
    public function mailSettings()
    {
        $this->load->helper('form');
        $data['mainTittle'] = "Mail Ayarları | Yönetici Paneli";
        $data['settings'] = $this->MailSettings_Model->getSettings();
        
        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/settings/mail', $data);
        $this->load->view('admin/footer');
    }

    public function mailUpdate()
    {
        $this->load->library('form_validation');

        $this->form_validation->set_rules('protocol', 'Protocol', 'required');
        $this->form_validation->set_rules('smtp_host', 'SMTP Host', 'required');
        $this->form_validation->set_rules('smtp_user', 'SMTP User', 'required|valid_email');
        $this->form_validation->set_rules('smtp_port', 'SMTP Port', 'required|integer');
        $this->form_validation->set_rules('smtp_crypto', 'SMTP Encryption', 'required');

        if ($this->form_validation->run() == FALSE) {
            echo json_encode([
                'status' => 'error',
                'message' => validation_errors()
            ]);
            return;
        }

        $updateData = [
            'protocol'    => $this->input->post('protocol'),
            'smtp_host'   => $this->input->post('smtp_host'),
            'smtp_user'   => $this->input->post('smtp_user'),
            'smtp_port'   => $this->input->post('smtp_port'),
            'smtp_crypto' => $this->input->post('smtp_crypto'),
            'ip'          => $this->input->ip_address(),
        ];

        if (!empty($this->input->post('smtp_pass'))) {
            $updateData['smtp_pass'] = $this->input->post('smtp_pass');
        }

        $this->MailSettings_Model->updateSettings($updateData);

        echo json_encode([
            'status' => 'success',
            'message' => 'SMTP ayarları başarıyla güncellendi.'
        ]);
    }
}
