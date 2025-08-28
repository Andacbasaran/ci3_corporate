<?php
class Maintenance_Model extends CI_Model
{
    public function get_status()
    {
        return $this->db->get('cd_maintenance')->row()->maintenance_mode;
    }

    public function update_status($status)
    {
        return $this->db->update('cd_maintenance', ['maintenance_mode' => $status], ['id' => 1]);
    }
}
