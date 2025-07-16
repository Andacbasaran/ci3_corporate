<?php
function active($url){
    $ci=& get_instance();
    $link =  $ci->uri->segment(1);
    $link2 =  $ci->uri->segment(2);
    if ($link2 != ""){
        if ($link."/".$link2 == $url){
            return " active ";
        }
    }else if($link == $url){
        return " active ";
    }
	return "";

}