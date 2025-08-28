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
        return $this->db->insert('cd_contact_data', $form_data);
    }
    
    function update($form_data)
    {
        $this->db->where('id', 1);
        return $this->db->update('cd_company', $form_data);
    }
    function get_company() {
        $query = $this->db->get('cd_company');
        return $query->result();
    }
    function get_contacts() {
        $this->db->order_by('id', 'DESC');
        $query = $this->db->get('cd_contact_data');
        return $query->result();
    }
}