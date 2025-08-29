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
        
        
        $this->load->view('admin/login/login', $data);
        if ($this->session->oturum_kaydi) {
            redirect(base_url("admin"));
            exit();
        }
        
    }

    public function adminLogin()
    {
        // Sadece AJAX ve POST isteklerine izin ver
        if (!$this->input->is_ajax_request() || $this->input->method() !== 'post') {
            show_error('İzin verilmiyor', 403);
            return;
        }

        $email = $this->input->post('email', true);
        $password = $this->input->post('password', true);
        $recaptcha_response = $this->input->post('g-recaptcha-response', true);

        // Temel alan doğrulamaları
        if (empty($email)) {
            echo json_encode(['status' => 'warning', 'tittle' => 'Email alanı boş olamaz.']);
            exit();
        }
        if (empty($password)) {
            echo json_encode(['status' => 'warning', 'tittle' => 'Parola alanı boş olamaz.']);
            exit();
        }
        if (empty($recaptcha_response)) {
            echo json_encode(['status' => 'error', 'tittle' => 'Lütfen robot olmadığınızı doğrulayın.']);
            exit();
        }

        $this->load->model('Settings_model');
        // Tek değer
        $secretKey = $this->Settings_Model->get('googlecaptchakey');

        // Tüm ayarlar
        //$settings = $this->Settings_model->get_all(); echo $settings['site_name'];


        // Google reCAPTCHA v2 doğrulaması
        $secret = $secretKey;
        $verify_response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$recaptcha_response}&remoteip=" . $this->input->ip_address());
        $responseData = json_decode($verify_response);

        if (!$responseData->success) {
            echo json_encode(['status' => 'error', 'tittle' => 'Robot doğrulaması başarısız.']);
            exit();
        }

        $user = $this->Admin_Model->getByEmail($email);

        $log_data = [
            'email' => $email,
            'ip_address' => $this->input->ip_address(),
            'user_agent' => $this->input->user_agent(),
        ];

        if ($user && password_verify($password, $user->password)) {
            $log_data['status'] = 'success';
            $this->db->insert('cd_admin_login_logs', $log_data);
            
            $this->db->where('id', $user->id)->update('cd_admin', ['last_login_date' => date('Y-m-d H:i:s')]);

            $session_data = [
                'admin_id' => $user->id,
                'admin_email' => $user->email,
                'logged_in' => true,
            ];
            $this->session->set_userdata('oturum_kaydi',$session_data);

            echo json_encode([
                'status' => 'success',
                'tittle' => 'Giriş başarılı, yönlendiriliyorsunuz.'
            ]);
            exit();
        } else {
            $log_data['status'] = 'fail';
            $this->db->insert('cd_admin_login_logs', $log_data);

            echo json_encode([
                'status' => 'error',
                'tittle' => 'Geçersiz kullanıcı adı veya parola.'
            ]);
            exit();
        }
    }


}