<style>
    .card-title {
        color: white;
    }
</style>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <!-- Info boxes -->
        <form id="contact_edit" method="post">
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">İletişim Bilgileri</h3>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="phone">Telefon Numarası:</label>
                                <input type="text" class="form-control" id="phone" name="phone" placeholder="+90 5xx xxx xx xx" value="<?= $contact->phone ?>">
                            </div>
                            <div class="form-group">
                                <label for="email">E-Posta Adresi:</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="ornek@mail.com" value="<?= $contact->mail ?>">
                            </div>
                            <div class="form-group">
                                <label for="address">Adres:</label>
                                <input type="text" class="form-control" id="address" name="address" placeholder="İstanbul / Beylikdüzü" value="<?= $contact->address ?>">
                            </div>
                            <div class="form-group">
                                <label for="googleEmbed">Google Maps Embed Kodu:</label>
                                <textarea class="form-control" id="googleEmbed" name="maps_code" rows="4" placeholder='<iframe src="..."></iframe>'><?= $contact->maps_code ?></textarea>
                            </div>
                        </div>
                    </div>
                </div> <!-- /.col-md-6 -->

                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Sosyal Medya Bilgileri</h3>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="twitter">X (Twitter)</label>
                                <input type="text" class="form-control" id="twitter" name="twitter" value="<?= $contact->twitter ?>">
                            </div>
                            <div class="form-group">
                                <label for="linkedin">LinkedIN</label>
                                <input type="text" class="form-control" id="linkedin" name="linkedin" value="<?= $contact->linkedin ?>">
                            </div>
                            <div class="form-group">
                                <label for="youtube">Youtube</label>
                                <input type="text" class="form-control" id="youtube" name="youtube" value="<?= $contact->youtube ?>">
                            </div>
                            <div class="form-group">
                                <label for="facebook">Facebook</label>
                                <input type="text" class="form-control" id="facebook" name="facebook" value="<?= $contact->facebook ?>">
                            </div>
                            <div class="form-group">
                                <label for="instagram">Instagram</label>
                                <input type="text" class="form-control" id="instagram" name="instagram" value="<?= $contact->instagram ?>">
                            </div>
                            <div class="form-group">
                                <label for="tiktok">Tiktok</label>
                                <input type="text" class="form-control" id="tiktok" name="tiktok" value="<?= $contact->tiktok ?>">
                            </div> 
                            <div class="form-group">
                                <label for="github">Github</label>
                                <input type="text" class="form-control" id="github" name="github" value="<?= $contact->github ?>">
                            </div>
                        </div>
                    </div>
                </div> <!-- /.col-md-6 -->
                <div class="card-footer w-100">
                    <button type="submit" class="btn btn-primary w-100">Güncelle</button>
                </div>
            </div> <!-- /.row -->
        </form>
    </div><!-- /.container-fluid -->
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script>
    $(document).ready(function () {
        $('#contact_edit').on('submit', function (e) {
            e.preventDefault();

            $.ajax({
                url: "<?= base_url('admin/contact/update') ?>",
                type: "POST",
                data: $(this).serialize(),
                dataType: "json",
                success: function (response) {
                    if (response.status === true) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: 'Bilgiler başarıyla güncellendi.',
                            confirmButtonText: 'Tamam',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Hata',
                            text: response.message || 'Bir hata oluştu.',
                            confirmButtonText: 'Tamam'
                        });
                    }
                },
                error: function () {
                    Swal.fire({
                        icon: 'error',
                        title: 'Sunucu Hatası',
                        text: 'Sunucuyla iletişim kurulamadı.',
                        confirmButtonText: 'Tamam'
                    });
                }
            });
        });
    });
</script>
