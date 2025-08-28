<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Maintenance extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        // Admin kontrolü yap
        if (!$this->session->userdata('oturum_kaydi')) {
            redirect(base_url("admin/login"));
            exit();
        }
    }

    public function index()
    {
        $this->load->model('Maintenance_Model');

        if ($this->input->method() === 'post') {
            $status = $this->input->post('maintenance_mode') ? 1 : 0;
            $this->Maintenance_Model->update_status($status);

            echo json_encode(['status' => 'success', 'message' => 'Bakım modu başarıyla güncellendi.']);
            return;
        }

        $data['status'] = $this->Maintenance_Model->get_status();
        $data["mainTittle"] = "Bakım Modu | Yönetici Paneli";

        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/settings/maintenance', $data);
        $this->load->view('admin/footer');
    }

}
