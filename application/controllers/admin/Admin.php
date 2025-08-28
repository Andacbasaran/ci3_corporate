<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller
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
        $data["mainTittle"] = "Admin Paneli | Andaç Başaran";
        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar', $data);

        $this->load->model('Admintab_Model');
        $data['veriler'] = $this->Admintab_Model->getSonBesVeri();


        $this->load->model('Contact_Model');
        $data['iletisim'] = $this->Contact_Model->get_contacts();

        $this->load->view('admin/admin', $data);
        $this->load->view('admin/footer');
    }
    public function logout()
    {
        $this->session->unset_userdata('oturum_kaydi');
        redirect(base_url('admin/login'));
        exit();
    }
    public function homeedit()
    {
        $data["mainTittle"] = "Anasayfa Logo Düzenle";

        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/homeedit');
        $this->load->view('admin/footer');
    }
    public function getCpuLoad()
    {
        $loadAvg = sys_getloadavg();
        $cpuLoad = $loadAvg[0];

        echo $cpuLoad;
    }
    public function measureMemoryUsage()
    {
        $memoryUsage = memory_get_usage(true);
        $memoryUsageFormatted = $this->formatMemorySize($memoryUsage);
        echo $memoryUsageFormatted;
    }
    private function formatMemorySize($size)
    {
        $units = array('B', 'KB', 'MB', 'GB', 'TB');
        $formattedSize = @round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) . ' ' . $units[$i];
        return $formattedSize;
    }
    public function getOnlineUsers()
    {
        $this->load->library('session');

        if (!$this->session->has_userdata('online_users')) {
            $this->session->set_userdata('online_users', array());
        }

        $onlineUsers = $this->session->userdata('online_users');
        $onlineCount = count($onlineUsers);

        echo $onlineCount;
    }
    public function iletisimDetay($id)
    {
        $this->load->model('Admintab_Model');
        $data['message'] = $this->Admintab_Model->getMessageById($id);
        $data["mainTittle"] = "Mesaj Detayı | Andaç Başaran";

        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar', $data);
        $this->load->view('admin/iletisimdetay', $data);
        $this->load->view('admin/footer');
    }
    public function iletisimler()
    {
        $this->load->model('Admintab_Model');
        $data["mainTittle"] = "İletişim Formları | Andaç Başaran";
        $data['veriler'] = $this->Admintab_Model->getSonVeri();
        $this->load->view('admin/header',$data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/iletisimler');
        $this->load->view('admin/footer');
    }
    public function slider()
    {
        $this->load->model('Slider_Model');
        $data["mainTittle"] = "Slider Yönetimi | Yönetici Paneli";

        $data ["sliders"] = $this->Slider_Model->get_sliders();

        $this->load->view('admin/header',$data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/slider');
        $this->load->view('admin/footer');
    }
}