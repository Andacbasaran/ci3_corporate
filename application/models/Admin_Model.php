<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_Model extends CI_Model
{
    public function login($admin, $adpass)
    {
        $this->db->where('email', $admin);
        $this->db->where('password', $adpass);
        $query = $this->db->get('cd_admin');

        if ($query->num_rows() > 0) {
            return $query->row();
        } else {
            return false;
        }
    }
}