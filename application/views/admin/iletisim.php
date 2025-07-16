<style>
    .card-title{
        color: white;
    }
</style>
<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <!-- Info boxes -->
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Konum Bilgisi Düzenleme</h3>
                    </div>
                    <form id="google_edit" action="<?= base_url("admin/iletisim"); ?>" method="post">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="first_segment">Google Tarafından Aldığınız Embed Kod:</label>
                                <input type="text" class="form-control" name="googleEmbed" value="<?= htmlspecialchars($mapsCode->maps_embed); ?>">
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary">Güncelle</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div><!--/. container-fluid -->
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->