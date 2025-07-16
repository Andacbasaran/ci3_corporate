<main id="main">
    <br><br><br><br><br><br><br><br><br>
    <div class="container" style="padding-left:400px;padding-right:400px;">

        <a class="navbar-brand text-brand" href="#"><span class="color-b"> Admin </span> Girişi</a>
        <br>



        <form id="admingiris" action="" data-my-form>

            <div class="form-outline">
                <input type="email" name="email" class="form-control" placeholder="Kullanıcı Adı" /> <br>
            </div>

            <div class="form-outline mb-4">
                <input type="password" name="password" class="form-control" placeholder="Şifre" />
            </div>

            <button type="button" id="formPost" class="btn btn-primary btn-block mb-4">Giriş Yap</button>

        </form>
    </div>
    <script>
        var giris = false;

        $("#formPost").click(function() {
            if (giris) {
                return false;
            }

            var _serialize = $("#admingiris").serialize();
            $.ajax({
                method: "post",
                url: "<?= base_url("admin/login/adminLogin") ?>",
                data: _serialize,
                success: function(response) {
                    response = JSON.parse(response);
                    Swal.fire({
                        position: 'center',
                        icon: response.status,
                        title: response.tittle,
                        showConfirmButton: true,
                        confirmButtonText: 'Tamam'
                    });
                    if (response.status === 'success') {
                        formGonderildi = true;
                        $("#formPost").text("Giriş Başarılı");
                        if (response.status == "success"){
                            Swal.fire({
                                position: 'center',
                                icon: response.status,
                                title: response.tittle,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            setTimeout(() => window.location.href = '<?=base_url("admin")?>',1500);
                        }else {
                            Swal.fire({
                                position: 'center',
                                icon: response.status,
                                title: response.tittle,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    }
                }
            });

            return false;
        });
    </script>


</main>

<section class="section-footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-4">
                <div class="widget-a">
                    <div class="w-header-a">
                        <h3 class="w-title-a text-brand">Andaç Başaran</h3>
                    </div>
                    <div class="w-body-a">
                        <p class="w-text-a color-text-a">

                        </p>
                    </div>
                    <div class="w-footer-a">
                        <ul class="list-unstyled">
                            <li class="color-a">
                                <span class="color-text-a">Email : </span> <a href="mailto:info@andacbasaran.com.tr"> info@andacbasaran.com.tr</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 section-md-t3">
                <div class="widget-a">

                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
