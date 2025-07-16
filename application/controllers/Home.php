<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Contact_Model');
        $this->load->library('form_validation');
    }

    public $benchmark_data = [];

    public function index()
    {
        if ($this->session->userdata('oturum_kaydi')) {
            $this->benchmark->mark('start_index');
        }

        $data["mainTittle"] = "Codeos Digital";
        $data["metaDescription"] = "";
        $data["metaKeywords"] = "";
        $this->load->view('front/header', $data);
        $this->load->view('front/home', $data);

        // Admin oturumu aktifse benchmark işlemini bitir
        if ($this->session->userdata('oturum_kaydi')) {
            $this->benchmark->mark('end_index');

            // Süre ölçüm sonuçlarını saklayın
            $this->benchmark_data['index'] = $this->benchmark->elapsed_time('start_index', 'end_index');
        }

        // Footer görünümünü yüklerken benchmark verilerini de taşıyın
        $this->load->view('front/footer', $this->benchmark_data);

    }

    public function sitemap()
    {
        $data["mainTittle"] = "Sitemap | Andaç Başaran";
        $this->load->view('sitemap.xml');
    }
    
    public function hakkimda()
    {
        $data["mainTittle"] = "Hakkımda | Andaç Başaran";
        $data["metaDescription"] = "Hakkımda";
        $data["metaKeywords"] = "andacbasaran,andac,blog,yazilim,basaranandac,php,codeigniter,codeigniter3";

        if ($this->session->userdata('oturum_kaydi')) {
            $this->benchmark->mark('start_index');
        }

        $this->load->view('front/header', $data);
        $this->load->view('front/about/about', $data);

        if ($this->session->userdata('oturum_kaydi')) {
            $this->benchmark->mark('end_index');

            // Süre ölçüm sonuçlarını saklayın
            $this->benchmark_data['index'] = $this->benchmark->elapsed_time('start_index', 'end_index');
        }

        // Footer görünümünü yüklerken benchmark verilerini de taşıyın
        $this->load->view('front/footer', $this->benchmark_data);
    }

}