<style>
    .card-title {
        color: white;
    }
</style>
<section class="content">
    <div class="container-fluid">
        <form id="maintenanceForm" method="post">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Bakım Modu Ayarları</h3>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="maintenance_mode">Bakım Modu</label><br>
                                <input
                                        type="checkbox"
                                        id="maintenance_mode"
                                        name="maintenance_mode"
                                        value="1"
                                    <?= ($status) ? 'checked' : '' ?>
                                        data-toggle="toggle"
                                        data-on="Açık"
                                        data-off="Kapalı"
                                        style="width: 60px; height: 30px;"
                                >
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
    $(document).ready(function(){
        $('#maintenanceForm').on('submit', function(e){
            e.preventDefault();

            let maintenanceValue = $('#maintenance_mode').is(':checked') ? 1 : 0;

            $.ajax({
                url: "<?= base_url('admin/maintenance') ?>",
                type: "POST",
                data: { maintenance_mode: maintenanceValue },
                dataType: "json",
                success: function(response){
                    if(response.status === 'success'){
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: response.message || 'Bakım modu güncellendi.',
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
                error: function(){
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
