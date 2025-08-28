<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MailSettings_Model extends CI_Model
{
    public function getSettings()
    {
        // Sadece gerekli 6 alanı seçiyoruz
        $this->db->select('protocol, smtp_host, smtp_user, smtp_pass, smtp_port, smtp_crypto');
        $query = $this->db->get_where('cd_mail_settings', ['id' => 1]);
        return $query->row();
    }

    // İstersen ileride ayar güncelleme için şöyle bir method ekleyebilirsin
    public function updateSettings($data)
    {
        return $this->db->update('cd_mail_settings', $data, ['id' => 1]);
    }
}
