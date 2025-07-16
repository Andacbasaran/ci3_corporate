<?php
class Slider_Model extends CI_Model {
    public function __construct() {
        parent::__construct();
        $this->load->database();
    }
    public function get_sliders() {
        $this->db->order_by('id', 'ASC');
        $query = $this->db->get('ab_slider');
        return $query->result();
    }
}
