<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codeos Digital | Yönetici Paneli</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            background: linear-gradient(135deg, #0f172a, #1e293b);
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            min-height: 100vh;
        }
        .g-recaptcha iframe {
            pointer-events: auto !important;
        }

        .g-recaptcha {
            pointer-events: auto !important;
        }

        button#formPost {
            pointer-events: auto !important;
            position: relative;
            z-index: 9999 !important;
        }

        .recaptcha-container {
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: center;
        }

        .recaptcha-container iframe {
            margin: 0 !important;
            padding: 0 !important;
            max-width: 100% !important;
            height: auto !important;
        }
        .page-wrapper {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 40px;
            width: 100%;
            max-width: 400px;
            color: #fff;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }
        .login-card h3 {
            font-weight: bold;
            margin-bottom: 10px;
        }
        .login-card p {
            font-size: 14px;
            color: #cbd5e1;
            margin-bottom: 25px;
        }
        .form-control {
            border-radius: 8px;
            border: none;
            padding: 12px 15px;
            background-color: rgba(255,255,255,0.1);
            color: #fff;
        }
        .form-control::placeholder {
            color: #94a3b8;
        }
        .btn-login {
            background: #2563eb;
            border: none;
            border-radius: 8px;
            padding: 12px;
            font-weight: bold;
            color: #fff;
            transition: 0.3s;
        }
        .btn-login:hover {
            background: #1d4ed8;
        }
        .brand {
            font-size: 26px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .brand span {
            color: #38bdf8;
        }
    </style>
</head>
<body>

<div class="page-wrapper">
    <div class="login-card text-center">
        <div class="brand">
            <span>Codeos</span> Digital
        </div>
        <h3>Yönetici Paneli</h3>
        <p>Hesabınıza erişmek için giriş yapın</p>

        <form id="admingiris" data-my-form>
            <div class="mb-3">
                <input type="email" name="email" class="form-control" placeholder="Kullanıcı Adı" required>
            </div>
            <div class="mb-4 position-relative">
                <input type="password" name="password" id="password" class="form-control" placeholder="Şifre" required>
                <span class="toggle-password" style="position:absolute; top:50%; right:10px; transform:translateY(-50%); cursor:pointer;">
                    <i class="fa fa-eye" id="togglePasswordIcon"></i>
                </span>
            </div>
            <div class="mb-4 recaptcha-container">
                <div class="g-recaptcha" data-sitekey="6LeGcJ8rAAAAAMtEjcw0g4UfLCjy8CJr2glo1q1K" data-callback="onCaptchaSuccess"></div>
            </div>
            <button type="submit" id="formPost" class="btn btn-login w-100">
                <i class="fa-solid fa-right-to-bracket"></i> Giriş Yap
            </button>
        </form>

    </div>
</div>

<script src="https://www.google.com/recaptcha/api.js?hl=tr" async defer></script>
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
    document.querySelector('.toggle-password').addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        const icon = document.getElementById('togglePasswordIcon');

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = "password";
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });

    $(document).ready(function () {
        var giris = false;

        function adminLogin() {
            if (giris) return false;

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

                    if(response.status !== 'success') {
                        if(typeof grecaptcha !== 'undefined') {
                            grecaptcha.reset();
                        }
                    }

                    if(response.status === 'success') {
                        $("#formPost").text("Giriş Başarılı");
                        Swal.fire({
                            position: 'center',
                            icon: response.status,
                            title: response.tittle,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => window.location.href = '<?=base_url("admin")?>', 1500);
                    }
                }
            });

            return false;
        }

        $("#admingiris").on("submit", function (e) {
            e.preventDefault();
            adminLogin();
        });
    });
</script>

</body>
</html>