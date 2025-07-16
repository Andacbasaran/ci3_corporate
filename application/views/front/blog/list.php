<style>
    .blog-card {
        transition: all 0.3s ease-in-out;
    }
    .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    }
    .blog-img {
        max-height: 200px;
        object-fit: cover;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }
    .blog-meta {
        font-size: 0.85rem;
        color: #888;
    }
</style>

<!-- Header -->
<section class="text-center py-5 bg-light">
    <div class="container">
        <h1 class="fw-bold">Blog Yazıları</h1>
        <p class="text-muted">Yazılım, API ve entegrasyon konularında en güncel içerikler</p>
    </div>
</section>

<!-- Blog Cards -->
<main class="container my-5">
    <div class="row g-4">

        <!-- Blog Item -->
        <div class="col-md-6 col-lg-4">
            <div class="card blog-card h-100">
                <img loading="lazy" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top blog-img" alt="Blog görseli">
                <div class="card-body">
                    <h5 class="card-title">API Nedir? Nasıl Çalışır?</h5>
                    <p class="card-text">API’lerin çalışma prensipleri ve entegrasyon süreçleri üzerine kısa bir bakış...</p>
                </div>
                <div class="card-footer bg-white border-top-0">
                    <small class="blog-meta">10 Nisan 2025 | Codeos</small><br>
                    <a href="<?= base_url("blog/detail") ?>" class="btn btn-sm btn-outline-primary mt-2">Devamını Oku</a>
                </div>
            </div>
        </div>

        <!-- Blog Item (kopyalayarak çoğaltabilirsin) -->
        <div class="col-md-6 col-lg-4">
            <div class="card blog-card h-100">
                <img loading="lazy" src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top blog-img" alt="Blog görseli">
                <div class="card-body">
                    <h5 class="card-title">PHP ile REST API Geliştirme</h5>
                    <p class="card-text">Adım adım PHP ile basit bir REST API geliştirmenin yolları...</p>
                </div>
                <div class="card-footer bg-white border-top-0">
                    <small class="blog-meta">8 Nisan 2025 | Codeos</small><br>
                    <a href="<?= base_url("blog/detail") ?>" class="btn btn-sm btn-outline-primary mt-2">Devamını Oku</a>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-4">
            <div class="card blog-card h-100">
                <img loading="lazy" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top blog-img" alt="Blog görseli">
                <div class="card-body">
                    <h5 class="card-title">PHP ile MySQL Bağlantısı</h5>
                    <p class="card-text">Adım adım PHP ile basit bir MySQL geliştirmenin yolları...</p>
                </div>
                <div class="card-footer bg-white border-top-0">
                    <small class="blog-meta">4 Nisan 2025 | Codeos</small><br>
                    <a href="<?= base_url("blog/detail") ?>" class="btn btn-sm btn-outline-primary mt-2">Devamını Oku</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Sayfalama -->
    <div class="d-flex justify-content-center mt-5">
        <nav>
            <ul class="pagination">
                <li class="page-item disabled"><a class="page-link" href="#"> <i class="fa-solid fa-arrow-left"></i> </a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#"> <i class="fa-solid fa-arrow-right"></i> </a></li>
            </ul>
        </nav>
    </div>
</main>
