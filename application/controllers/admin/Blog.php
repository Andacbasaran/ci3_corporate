<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library(['session','form_validation','upload']);
        $this->load->helper(['url','form','text']);
        $this->load->model('Blog_Model');

        if (!$this->session->userdata('oturum_kaydi')) {
            redirect(base_url("admin/login"));
        }
    }

    public function index()
    {
        $data["mainTittle"] = "Blog Listesi";
        $data["blogs"] = $this->Blog_Model->get_all();

        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/blog/list', $data);
        $this->load->view('admin/footer');
    }

    public function add()
    {
        $data["mainTittle"] = "Yeni Blog Ekle";

        if ($this->input->post()) {
            $this->form_validation->set_rules("title","Başlık","required|trim");
            $this->form_validation->set_rules("content","İçerik","required|trim");

            if ($this->form_validation->run()) {
                // Upload ayarları
                $image = null;
                if (!empty($_FILES["image"]["name"])) {
                    $config['upload_path']   = './uploads/blog/';
                    $config['allowed_types'] = 'jpg|jpeg|png|gif';
                    $config['file_name']     = time() . "-" . $_FILES["image"]["name"];
                    $this->upload->initialize($config);

                    if ($this->upload->do_upload("image")) {
                        $uploadData = $this->upload->data();
                        $image = "uploads/blog/" . $uploadData["file_name"];
                    }
                }

                $insertData = [
                    "title" => $this->input->post("title"),
                    "slug"  => url_title($this->input->post("title"), 'dash', TRUE),
                    "content" => $this->input->post("content"),
                    "image" => $image,
                    "status" => $this->input->post("status") ? 1 : 0
                ];

                $this->Blog_Model->insert($insertData);
                $this->session->set_flashdata("success","Blog başarıyla eklendi!");
                redirect("admin/blog");
            }
        }

        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/blog/add', $data);
        $this->load->view('admin/footer');
    }

    public function update($id)
    {
        $data["mainTittle"] = "Blog Güncelle";
        $data["blog"] = $this->Blog_Model->get($id);

        if (!$data["blog"]) {
            show_404();
        }

        if ($this->input->post()) {
            $this->form_validation->set_rules("title","Başlık","required|trim");
            $this->form_validation->set_rules("content","İçerik","required|trim");

            if ($this->form_validation->run()) {
                $image = $data["blog"]->image;

                if (!empty($_FILES["image"]["name"])) {
                    $config['upload_path']   = './uploads/blog/';
                    $config['allowed_types'] = 'jpg|jpeg|png|gif';
                    $config['file_name']     = time() . "-" . $_FILES["image"]["name"];
                    $this->upload->initialize($config);

                    if ($this->upload->do_upload("image")) {
                        if ($image && file_exists($image)) {
                            unlink($image);
                        }
                        $uploadData = $this->upload->data();
                        $image = "uploads/blog/" . $uploadData["file_name"];
                    }
                }

                $updateData = [
                    "title" => $this->input->post("title"),
                    "slug"  => url_title($this->input->post("title"), 'dash', TRUE),
                    "content" => $this->input->post("content"),
                    "image" => $image,
                    "status" => $this->input->post("status") ? 1 : 0
                ];

                $this->Blog_Model->update($id, $updateData);
                $this->session->set_flashdata("success","Blog başarıyla güncellendi!");
                redirect("admin/blog");
            }
        }

        $this->load->view('admin/header', $data);
        $this->load->view('admin/leftNavBar');
        $this->load->view('admin/blog/update', $data);
        $this->load->view('admin/footer');
    }

    public function delete($id)
    {
        $blog = $this->Blog_Model->get($id);
        if ($blog) {
            if ($blog->image && file_exists($blog->image)) {
                unlink($blog->image);
            }
            $this->Blog_Model->delete($id);
            $this->session->set_flashdata("success","Blog başarıyla silindi!");
        }
        redirect("admin/blog");
    }
}
