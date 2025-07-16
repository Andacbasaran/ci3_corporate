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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.64616584027!2d28.847373971403847!3d41.00520413860978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1748194706904!5m2!1str!2str"
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
                            <a style="text-decoration: none; color: black" href="mailto:info@codeos.tr">info@codeos.tr</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-geo-alt fs-2 me-3"></i>
                        <div>
                            <h5>Adres</h5>
                            <p class="mb-0">İstanbul / Türkiye</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-share fs-2 me-3"></i>
                        <div>
                            <h5>Sosyal Ağlarım</h5>
                            <div class="d-flex gap-2">
                                <a target="_blank" href="https://www.linkedin.com/in/andaç-başaran-9aa319218" class="text-muted fs-5"><i class="bi bi-linkedin"></i></a>
                                <a target="_blank" href="https://github.com/Andacbasaran" class="text-muted fs-5"><i class="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <?php if (isset($iletisim)): ?>
                <p class="mt-4 small text-muted">Yüklenme Süresi: <?php echo $iletisim; ?> saniye</p>
            <?php endif; ?>
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