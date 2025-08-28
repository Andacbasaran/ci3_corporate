<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">

<div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h3 class="fw-bold">Blog Listesi</h3>
        <a href="<?= base_url("admin/blog/add") ?>" class="btn btn-primary">
            <i class="fa fa-plus"></i> Yeni Blog Ekle
        </a>
    </div>

    <div class="card shadow-sm border-0 rounded-4">
        <div class="card-body">
            <div class="table-responsive">
                <table id="blogTable" class="table table-striped table-bordered align-middle">
                    <thead class="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Başlık</th>
                        <th>Durum</th>
                        <th>Resim</th>
                        <th>İşlem</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach($blogs as $b): ?>
                        <tr>
                            <td><?= $b->id ?></td>
                            <td><?= $b->title ?></td>
                            <td>
                                <?php if($b->status): ?>
                                    <span class="badge bg-success">Aktif</span>
                                <?php else: ?>
                                    <span class="badge bg-secondary">Pasif</span>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php if($b->image): ?>
                                    <img src="<?= base_url($b->image) ?>" class="img-thumbnail" width="80">
                                <?php else: ?>
                                    <span class="text-muted">-</span>
                                <?php endif; ?>
                            </td>
                            <td>
                                <a href="<?= base_url("admin/blog/update/$b->id") ?>"
                                   class="btn btn-sm btn-warning">
                                    <i class="fa fa-edit"></i> Düzenle
                                </a>
                                <a href="<?= base_url("admin/blog/delete/$b->id") ?>"
                                   onclick="return confirm('Silmek istediğine emin misin?')"
                                   class="btn btn-sm btn-danger">
                                    <i class="fa fa-trash"></i> Sil
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
<script>
    $(document).ready(function() {
        $('#blogTable').DataTable({
            "pageLength": 10,
            "lengthMenu": [5, 10, 25, 50],
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.13.6/i18n/tr.json"
            }
        });
    });
</script>
