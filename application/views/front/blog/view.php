<style>
    .blog-header {
        background: linear-gradient(135deg, #f8f9fa, #ffffff);
        padding: 60px 0;
        border-bottom: 1px solid #eee;
    }
    .blog-header h1 {
        font-weight: 700;
        font-size: 2.2rem;
    }
    .blog-meta {
        color: #888;
        font-size: 0.9rem;
    }
    .blog-content img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 20px 0;
    }
    .sidebar-box {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
    }
    .sidebar-box h5 {
        font-weight: 600;
        margin-bottom: 15px;
    }
    .sidebar-post {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .sidebar-post img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 6px;
        margin-right: 10px;
    }
    .sidebar-post a {
        font-size: 0.9rem;
        font-weight: 500;
        color: #333;
        text-decoration: none;
    }
    .sidebar-post a:hover {
        color: #0d6efd;
    }
</style>

<!-- Header -->
<section class="blog-header text-center">
    <div class="container">
        <h1><?= $blog->title ?></h1>
        <p class="blog-meta">
            <?= date("d M Y", strtotime($blog->created_at)) ?> | Codeos
        </p>
    </div>
</section>

<!-- Content -->
<main class="container my-5">
    <div class="row">
        <!-- Blog Content -->
        <div class="col-lg-8">
            <?php if($blog->image): ?>
                <img src="<?= base_url($blog->image) ?>" alt="<?= $blog->title ?>" class="mb-4 w-100 rounded">
            <?php endif; ?>

            <div class="blog-content">
                <?= $blog->content ?> <!-- burada TinyMCE içerik olduğu gibi gelir -->
            </div>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4">
            <!-- Son Yazılar -->
            <div class="sidebar-box">
                <h5>Son Yazılar</h5>
                <?php foreach($recentBlogs as $rb): ?>
                    <div class="sidebar-post">
                        <img src="<?= $rb->image ? base_url($rb->image) : base_url('assets/front/img/no-image.png') ?>" alt="<?= $rb->title ?>">
                        <div>
                            <a href="<?= base_url("blog/detail/".$rb->slug) ?>"><?= $rb->title ?></a><br>
                            <small class="text-muted"><?= date("d M Y", strtotime($rb->created_at)) ?></small>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Etiketler (opsiyonel) -->
            <div class="sidebar-box">
                <h5>Etiketler</h5>
                <a href="#" class="badge bg-light text-dark">PHP</a>
                <a href="#" class="badge bg-light text-dark">CodeIgniter</a>
                <a href="#" class="badge bg-light text-dark">API</a>
                <a href="#" class="badge bg-light text-dark">MySQL</a>
            </div>
        </div>
    </div>
</main>
<div class="d-flex justify-content-center mt-5">
    <?= $pagination ?>
</div>
