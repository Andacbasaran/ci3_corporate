<?php

class Settings_Model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    // Tüm ayarları associative array olarak getir
    public function get_all() {
        $query = $this->db->get('cd_settings');
        $result = $query->result_array();

        $settings = [];
        foreach ($result as $row) {
            $settings[$row['content_key']] = $row['content_value'];
        }

        return $settings;
    }

    // Tek bir key getir
    public function get($key) {
        $this->db->where('content_key', $key);
        $query = $this->db->get('cd_settings')->row();
        return $query ? $query->content_value : null;
    }

    // Ayar kaydet/güncelle
    public function set($key, $value) {
        $exists = $this->db->get_where('cd_settings', ['content_key' => $key])->row();

        if ($exists) {
            $this->db->where('content_key', $key);
            return $this->db->update('cd_settings', ['content_value' => $value]);
        } else {
            return $this->db->insert('cd_settings', [
                'content_key'   => $key,
                'content_value' => $value
            ]);
        }
    }
}

