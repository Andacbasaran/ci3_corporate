<style>
    .card-title {
        color: white;
    }
</style>
<section class="content">
    <div class="container-fluid">
        <form action="<?= base_url('admin/settings/mail/update') ?>" method="post">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">SMTP Ayarları</h3>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="protocol">Protocol</label>
                                <input type="text" name="protocol" id="protocol" class="form-control" value="<?= set_value('protocol', $settings->protocol ?? 'smtp') ?>" required>
                            </div>

                            <div class="form-group">
                                <label for="smtp_host">SMTP Host</label>
                                <input type="text" name="smtp_host" id="smtp_host" class="form-control" value="<?= set_value('smtp_host', $settings->smtp_host ?? '') ?>" required>
                            </div>

                            <div class="form-group">
                                <label for="smtp_user">E-Mail Adresi</label>
                                <input type="email" name="smtp_user" id="smtp_user" class="form-control" value="<?= set_value('smtp_user', $settings->smtp_user ?? '') ?>" required>
                            </div>

                            <div class="form-group">
                                <label for="smtp_pass">SMTP Şifresi</label>
                                <input type="text" name="smtp_pass" id="smtp_pass" class="form-control" value="<?= set_value('smtp_pass', $settings->smtp_pass ?? '') ?>" placeholder="Yeni şifre gir veya boş bırak">
                            </div>

                            <div class="form-group">
                                <label for="smtp_port">SMTP Port</label>
                                <input type="number" name="smtp_port" id="smtp_port" class="form-control" value="<?= set_value('smtp_port', $settings->smtp_port ?? 465) ?>" required>
                            </div>

                            <div class="form-group">
                                <label for="smtp_crypto">SMTP Encryption</label>
                                <select name="smtp_crypto" id="smtp_crypto" class="form-control" required>
                                    <option value="ssl" <?= (isset($settings->smtp_crypto) && $settings->smtp_crypto == 'ssl') ? 'selected' : '' ?>>SSL</option>
                                    <option value="tls" <?= (isset($settings->smtp_crypto) && $settings->smtp_crypto == 'tls') ? 'selected' : '' ?>>TLS</option>
                                    <option value="" <?= (isset($settings->smtp_crypto) && $settings->smtp_crypto == '') ? 'selected' : '' ?>>None</option>
                                </select>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary w-100">Güncelle</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
<script>
    $(document).ready(function() {
        $('form').on('submit', function(e) {
            e.preventDefault();

            $.ajax({
                url: "<?= base_url('admin/settings/mail/update') ?>",
                type: "POST",
                data: $(this).serialize(),
                dataType: "json",
                success: function(response) {
                    if (response.status === 'success') {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: response.message,
                            confirmButtonText: 'Tamam',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Hata',
                            html: response.message,
                            confirmButtonText: 'Tamam'
                        });
                    }
                },
                error: function() {
                    Swal.fire({
                        icon: 'error',
                        title: 'Sunucu Hatası',
                        text: 'İşlem gerçekleştirilemedi.',
                        confirmButtonText: 'Tamam'
                    });
                }
            });
        });
    });
</script>
