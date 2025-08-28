<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog_model extends CI_Model
{
    public function get_all()
    {
        return $this->db->order_by("id","DESC")->get("cd_blog")->result();
    }

    public function get($id)
    {
        return $this->db->where("id",$id)->get("cd_blog")->row();
    }

    public function insert($data)
    {
        return $this->db->insert("cd_blog", $data);
    }

    public function update($id, $data)
    {
        return $this->db->where("id",$id)->update("cd_blog", $data);
    }

    public function delete($id)
    {
        return $this->db->where("id",$id)->delete("cd_blog");
    }

    // aktif blogları getir
    public function get_active_blogs($limit = 10, $offset = 0)
    {
        return $this->db->where("status", 1)
            ->order_by("created_at", "DESC")
            ->limit($limit, $offset)
            ->get("cd_blog")
            ->result();
    }

    // toplam aktif blog sayısı
    public function count_active_blogs()
    {
        return $this->db->where("status", 1)->count_all_results("cd_blog");
    }

    // slug veya id’ye göre detay
    public function get_by_slug($slug)
    {
        return $this->db->where("slug", $slug)
            ->where("status", 1)
            ->get("cd_blog")
            ->row();
    }

    public function get_recent_blogs($limit = 5) {
        return $this->db->where("status", 1)
            ->order_by("created_at", "DESC")
            ->limit($limit)
            ->get("blogs")
            ->result();
    }
}
