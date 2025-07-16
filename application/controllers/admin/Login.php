<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Admin_Model');
        $this->load->library('form_validation');
    }

    public function index(){
        $data["mainTittle"] = "Admin Paneli Girişi | Andaç Başaran";
        $this->load->view('admin/login/header', $data);
        $this->load->view('admin/login/login', $data);
        $this->load->view('admin/login/footer', $data);
        if ($this->session->oturum_kaydi) {
            redirect(base_url("admin"));
            exit();
        }
    }

    public function adminLogin(){
        $this->session->unset_userdata("oturum_kaydi");

        if ($this->input->post("email") == ""){
            echo json_encode(array("status" => "warning" , "tittle" => "Admin İsmini Yazmadan Giriş Yapamaz." ));
            exit();
        }

        if ($this->input->post("password") == ""){
            echo json_encode(array("status" => "warning" , "tittle" => "Admin Parolasını Girmeli."));
            exit();
        }

        if (isset($_POST) && !empty($_POST)) {
            $admin_login = array(
                'email' => $this->input->post('email'),
                'password' => $this->input->post('password')
            );
            $user = $this->Admin_Model->login($admin_login['email'], $admin_login['password']);

            if ($user) {
                $this->session->set_userdata('oturum_kaydi', $admin_login);
                echo json_encode(array("status" => "success", "tittle" => "Giriş Başarılı, yönlendiriliyorsunuz."));
            } else {
                echo json_encode(array("status" => "error", "tittle" => "Geçersiz kullanıcı adı veya parola."));
            }
        }
    }
}