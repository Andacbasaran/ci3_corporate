<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <!-- Info boxes -->
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                    <span class="info-box-icon bg-danger elevation-1"><i class="fa fa-server"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">CPU Yükü</span>
                        <span class="info-box-number" id="cpu_load">
               <small>%</small>
            </span>
                    </div>
                    <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
            </div>
            <script>
                $(document).ready(function() {
                    function updateCpuLoad() {
                        $.ajax({
                            url: 'admin/getCpuLoad',
                            method: 'GET',
                            success: function(response) {
                                $('#cpu_load').text('%' + response);
                            },
                            error: function() {
                                console.log('CPU yükü alınamadı.');
                            }
                        });
                    }

                    updateCpuLoad();

                    setInterval(updateCpuLoad, 30000);
                });
            </script>

            <!-- /.col -->
            <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                    <span class="info-box-icon bg-info elevation-1"><i class="fa fa-memory"></i></span>

                    <div class="info-box-content">
                        <span class="info-box-text">Bellek Kullanımı</span>
                        <span class="info-box-number" id="memory_usage"></span>
                    </div>
                    <!-- /.info-box-content -->
                </div>

                <script>
                    $(document).ready(function() {
                        function updateMemoryUsage() {
                            $.ajax({
                                url: 'admin/measureMemoryUsage',
                                method: 'GET',
                                success: function(response) {
                                    $('#memory_usage').text(response);
                                },
                                error: function() {
                                    console.log('Bellek kullanımı alınamadı.');
                                }
                            });
                        }

                        updateMemoryUsage();

                        setInterval(updateMemoryUsage, 60000);
                    });
                </script>
                <!-- /.info-box -->
            </div>
            <!-- /.col -->
            
            <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                    <span class="info-box-icon bg-warning elevation-1"><i class="fa fa-book"></i></span>

                    <div class="info-box-content">
                        <span class="info-box-text">Yazılan Blog Sayısı</span>
                        <span class="info-box-number"> 3 </span>
                    </div>
                    <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
            </div>
            <!-- /.col -->
            
            <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                    <span class="info-box-icon bg-danger elevation-1"><i class="fa-solid fa-message"></i></i></span>
                    <div class="info-box-content">
                        <?php $toplamIletisim = count($iletisim); ?>
                        <span class="info-box-text">Doldurulan İletişim Formu</span>
                        <span class="info-box-number"><?php echo $toplamIletisim; ?></span>
                    </div>
                    <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
            </div>
            <!-- /.col -->
        <!-- /.row -->
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">En son doldurulan iletişim formları
                    <div class="float-right">
                        <a href="<?= base_url("admin/iletisimler")?>" class="btn btn-outline-primary"> Tümünü Gör</a>
                    </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Adı-Soyadı</th>
                                <th>E-Mail Adresi</th>
                                <th>Konusu</th>
                                <th>Mesaj</th>
                                <th>Tarih</th>
                                <th>Detaylar</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php foreach($veriler as $veri):?>
                                <tr>
                                    <td><?php echo $veri->id; ?></td>
                                    <td><?php echo $veri->namesurname; ?></td>
                                    <td><?php echo $veri->email; ?></td>
                                    <td><?php echo $veri->subject; ?></td>
                                    <td>
                                        <?php
                                        $message = $veri->message;
                                        $messageLimit = 35;

                                        if (strlen($message) > $messageLimit) {
                                            $message = substr($message, 0, $messageLimit) . '...';
                                        }

                                        echo $message;
                                        ?>
                                    </td>
                                    <td><?php echo $veri->date; ?></td>
                                    <td><a href="<?php echo base_url('admin/iletisimdetay/' . $veri->id); ?>" class="btn btn-outline-primary"><i class="fa-solid fa-eye"></i></a></td>
                                </tr>
                            <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->