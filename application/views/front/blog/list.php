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

<section class="text-center py-5 bg-light">
    <div class="container">
        <h1 class="fw-bold">Blog Yazıları</h1>
        <p class="text-muted">Yazılım, API ve entegrasyon konularında en güncel içerikler</p>
    </div>
</section>

<main class="container my-5">
    <div class="row g-4">

        <?php foreach($blogs as $b): ?>
            <div class="col-md-6 col-lg-4">
                <div class="card blog-card h-100">
                    <img
                            loading="lazy"
                            src="<?= $b->image ? base_url($b->image) : base_url('assets/front/img/no-image.png') ?>"
                            class="card-img-top blog-img"
                            alt="<?= $b->title ?>">
                    <div class="card-body">
                        <h5 class="card-title"><?= $b->title ?></h5>
                        <p class="card-text">
                            <?= mb_strimwidth(strip_tags($b->content), 0, 120, "...") ?>
                        </p>
                    </div>
                    <div class="card-footer bg-white border-top-0">
                        <small class="blog-meta">
                            <?= date("d M Y", strtotime($b->created_at)) ?> | Codeos
                        </small><br>
                        <a href="<?= base_url("blog/".$b->slug) ?>" class="btn btn-sm btn-outline-primary mt-2">Devamını Oku</a>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>


    </div>

    <!-- Dinamik Sayfalama -->
    <div class="d-flex justify-content-center mt-5">
        <?= $pagination ?>
    </div>
</main>
