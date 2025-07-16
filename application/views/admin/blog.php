<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <!-- Info boxes -->
        <div class="row">
            <form method="post" action="<?= base_url('admin/blog/kaydet'); ?>" enctype="multipart/form-data">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Blog Başlığı</span>
                    <input type="text" class="form-control" name="baslik" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" name="blog_gorsel" id="inputGroupFile02">
                    <label class="input-group-text" for="inputGroupFile02">Blog Görseli Yükle</label>
                </div>
                <p>
                    <i class="fa-solid fa-circle-question"></i>
                    Blog görseli 600x800 boyutunda olmalıdır.
                </p>
                <div class="mb-3" id="blog_editor1">
                    <label for="exampleFormControlTextarea1" class="form-label">Blog İçerik Yazısı</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="yazi"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Blog Gönderisi Ekle</button>
            </form>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div><!--/. container-fluid -->
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!--
<script>
    var editor1 = new RichTextEditor("#blog_editor1");
</script>
-->