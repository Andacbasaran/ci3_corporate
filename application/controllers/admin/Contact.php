<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->load->library('form_validation');

        if (!$this->session->userdata('oturum_kaydi')) {
            redirect(base_url("admin/login"));
            exit();
        }
    }
    
    public function index()
    {
        $this->load->model('Contact_Model');
        $data["contact"] = $this->Contact_Model->get_company()[0];
        
        $data["mainTittle"] = "İletişim Sayfası Düzenle | Yönetici Paneli";
        
        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/contact/contact',$data);
        $this->load->view('admin/footer');
    }

    // İletişim Sayfası Bilgileri Güncelleme
    public function update()
    {
        if ($this->input->is_ajax_request()) {
            $this->load->model('Contact_Model');

            $data = array(
                'phone'     => $this->input->post('phone', true),
                'mail'      => $this->input->post('email', true),
                'address'   => $this->input->post('address', true),
                'maps_code' => $this->input->post('maps_code', true),
                'twitter'   => $this->input->post('twitter', true),
                'linkedin'  => $this->input->post('linkedin', true),
                'youtube'   => $this->input->post('youtube', true),
                'facebook'  => $this->input->post('facebook', true),
                'instagram' => $this->input->post('instagram', true),
                'github'    => $this->input->post('github', true),
                'ip'        => $this->input->ip_address(),
            );

            $insert = $this->Contact_Model->update($data);

            if ($insert) {
                echo json_encode(['status' => true]);
            } else {
                echo json_encode(['status' => false, 'message' => 'Veritabanına eklenemedi']);
            }
        } else {
            show_404();
        }
    }


}