<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Blog_Model');
        $this->load->helper('text');
        $this->load->library('form_validation');
        $this->load->library('pagination'); // 🔹 sayfalama kütüphanesi
    }

    public function index()
    {
        $data["mainTittle"] = "Blog";
        $data["metaDescription"] = "";
        $data["metaKeywords"] = "";

        // --- Sayfalama Ayarları ---
        $config["base_url"] = base_url("blog/index");
        $config["total_rows"] = $this->Blog_Model->count_active_blogs();
        $config["per_page"] = 6;
        $config["uri_segment"] = 3;

        // Bootstrap 5 uyumlu pagination
        $config['full_tag_open'] = '<ul class="pagination justify-content-center">';
        $config['full_tag_close'] = '</ul>';
        $config['attributes'] = ['class' => 'page-link'];
        $config['first_link'] = 'İlk';
        $config['last_link'] = 'Son';
        $config['first_tag_open'] = '<li class="page-item">';
        $config['first_tag_close'] = '</li>';
        $config['prev_tag_open'] = '<li class="page-item">';
        $config['prev_tag_close'] = '</li>';
        $config['next_tag_open'] = '<li class="page-item">';
        $config['next_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li class="page-item">';
        $config['last_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="page-item active"><a class="page-link" href="#">';
        $config['cur_tag_close'] = '</a></li>';
        $config['num_tag_open'] = '<li class="page-item">';
        $config['num_tag_close'] = '</li>';

        $this->pagination->initialize($config);

        $page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;

        $data["blogs"] = $this->Blog_Model->get_active_blogs($config["per_page"], $page);
        $data["links"] = $this->pagination->create_links();

        $this->load->view('front/header', $data);
        $this->load->view('front/blog/list', $data);
        $this->load->view('front/footer', $data);
    }

    public function detail($slug)
    {
        $data["blog"] = $this->Blog_Model->get_by_slug($slug);

        if(!$data["blog"]) {
            show_404();
        }

        $data["recentBlogs"] = $this->Blog_Model->get_recent_blogs(5);
        $data["mainTittle"] = $data["blog"]->title;
        $data["metaDescription"] = character_limiter(strip_tags($data["blog"]->content), 160);
        $data["metaKeywords"] = str_replace('-', ',', $data["blog"]->slug);

        $this->load->view('front/header', $data);
        $this->load->view('front/blog/view', $data);
        $this->load->view('front/footer', $data);
    }
}
