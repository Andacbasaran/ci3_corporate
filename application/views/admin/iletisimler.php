<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" style="color: white">İletişim Formları</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="col-sm-12 col-md-6">
                            <div class="dt-buttons btn-group flex-wrap">
                                <button class="btn btn-secondary buttons-copy buttons-html5" tabindex="0" aria-controls="copy" type="button"><span>Copy</span></button>
                                <button class="btn btn-secondary buttons-csv buttons-html5" tabindex="0" aria-controls="csv" type="button"><span>CSV</span></button>
                                <button class="btn btn-secondary buttons-excel buttons-html5" tabindex="0" aria-controls="excel" type="button"><span>Excel</span></button>
                                <button class="btn btn-secondary buttons-pdf buttons-html5" tabindex="0" aria-controls="pdf" type="button"><span>PDF</span></button>
                                <button class="btn btn-secondary buttons-print" tabindex="0" aria-controls="print" type="button"><span>Print</span></button>
                                <div class="btn-group"><button class="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis" tabindex="0" aria-controls="example1" type="button" aria-haspopup="true" aria-expanded="false"><span>Column visibility</span></button></div>
                            </div>
                        </div>
                        <br>
                        <table id="iletisimler" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Adı - Soyadı</th>
                                <th>E-Mail Adresi</th>
                                <th>Konusu</th>
                                <th>Mesaj</th>
                                <th>Tarih</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php foreach ($veriler as $veri): ?>
                                <tr>
                                    <td style="color: white"><?= $veri->id; ?></td>
                                    <td style="color: white"><?= $veri->namesurname; ?></td>
                                    <td style="color: white; width: 15%;">
                                        <?php
                                        $email = $veri->email;
                                        $emailLimit = 20;
                                        if (strlen($email) > $emailLimit) {
                                            $email = substr($email, 0, $emailLimit) . '...';
                                        }
                                        echo $email;
                                        ?>
                                    </td>
                                    <td style="color: white; width: 15%;"><?= $veri->subject; ?></td>
                                    <td style="color: white; width: 40%">
                                        <?php
                                        $message = $veri->message;
                                        $messageLimit = 70;
                                        if (strlen($message) > $messageLimit) {
                                            $message = substr($message, 0, $messageLimit) . '...';
                                        }
                                        echo $message;
                                        ?>
                                    </td>
                                    <td style="color: white" width="10%"> <?= $veri->date; ?> </td>
                                    <td><a href="<?= base_url('admin/iletisimdetay/' . $veri->id); ?>" class="btn btn-outline-primary"><i class="fa-solid fa-eye"></i></a></td>
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
    </div>
    <!-- /.container-fluid -->
</section>
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
            var $table = $('#iletisimler');
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

            var $table = $('#iletisimler');
            var $rows = $table.find('tbody tr');

            // Tüm satırları gizle
            $rows.hide();

            // Belirli bir aralıktaki satırları göster
            $rows.slice(start, end).show();
        }
    });
</script>
<script>
    var table = document.getElementById("iletisimler");

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