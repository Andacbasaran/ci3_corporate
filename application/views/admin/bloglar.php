<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <!-- Info boxes -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" style="color: white">Yazılan Bloglar</h3>
                        <a href="<?= base_url("admin/blog/ekle")?>">
                            <i class="fa-solid fa-square-plus fa-lg" style="float: right"></i>
                        </a>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="bloglar" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Başlık</th>
                                <th>Yazar</th>
                                <th>Yazı</th>
                                <th>Tarih</th>
                                <th>Kontrol</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php foreach ($bloglar as $blogsirala): ?>
                                <tr>
                                    <td style="color: white"><?= $blogsirala->id; ?></td>
                                    <td style="color: white"><?= $blogsirala->baslik; ?></td>
                                    <td style="color: white; width: 15%;">
                                        <?php
                                        $yazar = $blogsirala->yazar;
                                        $yaziLimit = 20;
                                        if (strlen($yazar) > $yaziLimit) {
                                            $yazar = substr($yazar, 0, $yaziLimit) . '...';
                                        }
                                        echo $yazar;
                                        ?>
                                    </td>
                                    <td style="color: white; width: 40%">
                                        <?php
                                        $yazi = $blogsirala->yazi;
                                        $yaziLimit = 50;
                                        if (strlen($yazi) > $yaziLimit) {
                                            $yazi = substr($yazi, 0, $yaziLimit) . '...';
                                        }
                                        echo $yazi;
                                        ?>
                                    </td>
                                    <td style="color: white"; width="15%"> <?= $blogsirala->tarih; ?> </td>
                                    <td style="width: 12%">
                                        <a href="<?= base_url('admin/' . $blogsirala->id); ?>" class="btn btn-outline-primary"><i class="fa-solid fa-eye" style="color: white"></i></a>
                                        <a href="<?= base_url('blog/delete_blog/' . $blogsirala->id); ?>" class="btn btn-outline-primary"><i class="fa-regular fa-trash-can fa-lg" style="color: red"></i></a>
                                        <a href="<?= base_url('admin/' . $blogsirala->id); ?>" class="btn btn-outline-primary"><i class="fa-solid fa-pen-to-square fa-lg" style="color: green"></i></a>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                            </tbody>
                        </table>
                        <!-- Sınırlama seçeneği ve sayfalama numaraları -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="filter">Gösterilecek Satır Sayısı: </label>
                                <select id="filter" class="form-control" style="width: 4rem">
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                </select>
                            </div>
                            <div class="col-md-5 text-right">
                                <div class="pagination" style="margin-left: 69%; margin-right: 0; margin-top: 15px">
                                    <!-- Sayfa numaraları burada görüntülenecek -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div><!--/. container-fluid -->
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script>
    $(document).ready(function() {
        var currentPage = 1;
        var recordsPerPage = 20;

        // Sayfa yüklendiğinde belirli sayıda kaydı göster
        showRecords(currentPage, recordsPerPage);

        // Select değişikliğini izle
        $('#filter').on('change', function() {
            recordsPerPage = $(this).val();
            showRecords(currentPage, recordsPerPage);
        });

        // Sayfalama numaralarını oluştur
        createPagination();

        function createPagination() {
            var $table = $('#bloglar');
            var rowCount = $table.find('tbody tr').length;
            var pageCount = Math.ceil(rowCount / recordsPerPage);

            // Sayfalama bağlantılarını oluştur
            var paginationHTML = '<ul class="pagination">';
            for (var i = 1; i <= pageCount; i++) {
                paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>';
            }
            paginationHTML += '</ul>';

            $('.pagination').html(paginationHTML);

            // Sayfalama bağlantılarına tıklama işlevselliği ekle
            $('.pagination a').on('click', function(e) {
                e.preventDefault();
                currentPage = $(this).data('page');
                showRecords(currentPage, recordsPerPage);
            });
        }

        function showRecords(page, recordsPerPage) {
            var start = (page - 1) * recordsPerPage;
            var end = start + recordsPerPage;

            var $table = $('#bloglar');
            var $rows = $table.find('tbody tr');

            // Tüm satırları gizle
            $rows.hide();

            // Belirli bir aralıktaki satırları göster
            $rows.slice(start, end).show();
        }
    });
</script>
<script>
    var table = document.getElementById("bloglar");

    var ws = XLSX.utils.table_to_sheet(table);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Excel dosyasını indirme bağlantısını oluşturun
    var blob = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "tablo.xlsx";
    a.click();
    URL.revokeObjectURL(url);
</script>
<style>
    .dark-mode .page-item .page-link {
        color: white;
    }
</style>