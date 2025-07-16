<?php
class Contact_Model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
    function ekle($form_data)
    {
        return $this->db->insert('cd_contact_data',$form_data);
    }
    function get_contacts() {
        $this->db->order_by('id', 'DESC');
        $query = $this->db->get('cd_contact_data');
        return $query->result();
    }
}