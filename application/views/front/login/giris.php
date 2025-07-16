<main id="main">
    <br><br><br><br><br><br><br><br><br>
    <div class="container" style="padding-left:400px;padding-right:400px;">

        <a class="navbar-brand text-brand" style="padding-left: 27%" href="#"><span class="color-b"> Kullanıcı </span> Girişi</a><br>
        <br>

        <form action="login.php" method="post">

            <div class="form-outline">
                <label class="form-label" for="form3Example1">Kullanıcı Adı
                    <i class="fa-solid fa-question"></i>
                </label>
                <input type="text" name="a_kadi" id="form3Example1" class="form-control" aria-label="Şuanda kullanım dışıdır." /> <br>
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4">Şifre</label>
                <input type="password" name="a_sifre" id="form3Example4" class="form-control" disabled />
            </div>

            <button type="submit" name="admin_giris_btn" class="btn btn-primary btn-block mb-4">Giriş Yap</button>
            <button type="submit" name="admin_giris_btn" class="btn btn-primary btn-block mb-4">Hesabın yok mu? Kullanıcı oluştur</button>

        </form>
    </div>
</main>