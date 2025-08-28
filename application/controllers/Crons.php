<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Crons extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        // Sadece CLI veya belirli IP'lere izin ver
        if (!$this->input->is_cli_request()) {
            show_error('Bu sayfa sadece CLI (cron) için erişilebilir.');
        }
    }

    public function daily_task()
    {
        // Günlük çalışacak işler
        log_message('info', 'Günlük cron çalıştı: ' . date('Y-m-d H:i:s'));

        echo "Günlük görev tamamlandı.";
    }

    public function weekly_task()
    {
        log_message('info', 'Haftalık cron çalıştı: ' . date('Y-m-d H:i:s'));
        
        // Admin login loglarını 1000 adetten fazla ise sil
        $adminLoginlogcount = $this->db->count_all('cd_admin_login_logs');
        if ($adminLoginlogcount > 1000) {
            $this->db->query('TRUNCATE TABLE cd_admin_login_logs');
        }

        echo "Haftalık görev tamamlandı.";
    }

    public function monthly_task()
    {
        log_message('info', 'Aylık cron çalıştı: ' . date('Y-m-d H:i:s'));
        echo "Aylık görev tamamlandı.";
    }
}
