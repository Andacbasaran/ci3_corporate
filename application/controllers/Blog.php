<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Contact_Model');
        $this->load->library('form_validation');
    }
    
    public function index()
    {
        //meta keys
        $data["mainTittle"] = "Bloglar | Andaç Başaran";
        $data["metaDescription"] = "İletişim";
        $data["metaKeywords"] = "andacbasaran,andac,blog,yazilim,basaranandac,php,codeigniter,codeigniter3";
        
        $this->load->view('front/header', $data);
        $this->load->view('front/blog/list', $data);
        $this->load->view('front/footer', $data);
    }

}