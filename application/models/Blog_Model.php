<?php
class Blog_Model extends CI_Model {
    public function __construct() {
        parent::__construct();
        $this->load->database();
    }
    public function get_blog_posts() {
        $this->db->order_by('tarih', 'DESC');
        $query = $this->db->get('ab_blog');
        return $query->result();
    }
    public function get_last_posts() {
        $this->db->order_by('tarih', 'DESC');
        $this->db->limit(6);
        $query = $this->db->get('ab_blog');
        return $query->result();
    }
    public function ekleBlog($baslik, $yazi, $blogpic) {

        $data = array(
            'baslik' => $baslik,
            'yazi' => $yazi,
            'blogpic' => $blogpic
        );

        $this->db->insert('ab_blog', $data);

        return $this->db->insert_id();
    }
    public function home_blogs($blog_id) {
        $this->db->where('id', $blog_id);
        $query = $this->db->get('ab_blog');

        if ($query->num_rows() == 1) {
            return $query->row();
        } else {
            return null;
        }
    }
}
