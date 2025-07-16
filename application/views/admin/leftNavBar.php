<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="<?= base_url("admin")?>" class="brand-link">
        <img src="<?= base_url("assets/img/logo.png")?>" alt="">
    </a><br>
    <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-header" style="color: white">Site Yönetimi</li>
                <li class="nav-item">
                    <a href="<?= base_url("admin/slider")?>" class="nav-link">
                        <i class="fa-solid fa-sliders"></i>
                        <p>
                            Slider Yönetimi
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="<?= base_url("admin/blog")?>" class="nav-link">
                        <i class="fa fa-blog"></i>
                        <p>
                            Blog Yönetimi
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="<?= base_url('admin/iletisimler')?>" class="nav-link">
                        <i class="fa-regular fa-id-card"></i>
                        <p>İletişim İstekleri</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="<?= base_url("admin/iletisim") ?>" class="nav-link">
                        <i class="fa-solid fa-id-card"></i>
                        <p>İletişim Sayfası Bilgileri</p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->