<?php
class Admintab_Model extends CI_Model {
    public function getSonBesVeri()
    {
        $this->db->order_by('id', 'DESC');
        $this->db->limit(5);

        $query = $this->db->get('cd_contact_data');
        return $query->result();
    }
    public function getMessageById($id)
    {
        $query = $this->db->get_where('cd_contact_data', array('id' => $id));
        return $query->row();
    }
    public function getSonVeri()
    {
        $this->db->order_by('id', 'DESC');

        $query = $this->db->get('cd_contact_data');
        return $query->result();
    }

}

