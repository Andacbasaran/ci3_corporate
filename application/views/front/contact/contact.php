<main id="main">
    <section class="py-5 bg-light border-bottom">
        <div class="container">
            <h1 class="mb-2">İletişim</h1>
            <p class="text-muted">Görüş ve istekleriniz için bize ulaşabilirsiniz.</p>
        </div>
    </section>

    <section class="py-5">
        <div class="container">
            <div class="row g-5 align-items-stretch">
                <div class="col-lg-6">
                    <div class="h-100 w-100 rounded shadow-sm overflow-hidden">
                        <iframe
                                src="<?= $companyData[0]->maps_code ?>"
                                class="w-100 h-100 border-0"
                                style="min-height: 100%;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div class="col-lg-6 d-flex">
                    <form id="contactForm" action="" data-my-form class="p-4 shadow rounded bg-light w-100 align-self-stretch">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <input type="text" name="namesurname" class="form-control" placeholder="👤 Ad Soyad" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mb-3">
                                    <input type="email" name="email" class="form-control" placeholder="📧 E-mail Adresiniz" required>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group mb-3">
                                    <input type="text" name="subject" class="form-control" placeholder="✉️ Konu" maxlength="60" required>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group mb-3">
                                    <textarea name="message" class="form-control" rows="5" placeholder="📝 Mesajınız" required></textarea>
                                </div>
                            </div>
                            <div class="col-12 text-end">
                                <button class="btn btn-primary px-5 py-2" type="button" id="formPost">
                                    <span id="btnText">Gönder</span>
                                    <span id="btnSpinner" class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-envelope fs-2 me-3"></i>
                        <div>
                            <h5>Merhaba De</h5>
                            <a style="text-decoration: none; color: black" href="mailto:<?= $companyData[0]->mail ?>"><?= $companyData[0]->mail ?></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-geo-alt fs-2 me-3"></i>
                        <div>
                            <h5>Adres</h5>
                            <p class="mb-0"><?= $companyData[0]->address ?></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-share fs-2 me-3"></i>
                        <div>
                            <h5>Sosyal Ağlarım</h5>
                            <div class="d-flex gap-2">
                                <?php if (!empty($companyData[0]->linkedin)) : ?>
                                    <a target="_blank" href="<?= $companyData[0]->linkedin ?>" class="text-muted fs-5"><i class="bi bi-linkedin"></i></a>
                                <?php endif; ?>
                                
                                <?php if (!empty($companyData[0]->twitter)) : ?>
                                    <a target="_blank" href="<?= $companyData[0]->twitter ?>" class="text-muted fs-5"><i class="bi bi-twitter"></i></a>
                                <?php endif; ?>
                                
                                <?php if (!empty($companyData[0]->youtube)) : ?>
                                    <a target="_blank" href="<?= $companyData[0]->youtube ?>" class="text-muted fs-5"><i class="bi bi-youtube"></i></a>
                                <?php endif; ?> 
                                
                                <?php if (!empty($companyData[0]->facebook)) : ?>
                                    <a target="_blank" href="<?= $companyData[0]->facebook ?>" class="text-muted fs-5"><i class="bi bi-facebook"></i></a>
                                <?php endif; ?>
                                
                                <?php if (!empty($companyData[0]->instagram)) : ?>
                                    <a target="_blank" href="<?= $companyData[0]->instagram ?>" class="text-muted fs-5"><i class="bi bi-instagram"></i></a>
                                <?php endif; ?>
                                
                                <?php if (!empty($companyData[0]->github)) : ?>
                                    <a target="_blank" href="<?= $companyData[0]->github ?>" class="text-muted fs-5"><i class="bi bi-github"></i></a>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
    var formGonderildi = false;

    $("#formPost").click(function () {
        if (formGonderildi) return false;

        var _serialize = $("#contactForm").serialize();

        $.ajax({
            method: "post",
            url: "<?= base_url("contact/postContactForm") ?>",
            data: _serialize,
            success: function (response) {
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
                    $("#formPost").text("Mesaj gönderildi");
                }
            }
        });
        return false;
    });
</script>