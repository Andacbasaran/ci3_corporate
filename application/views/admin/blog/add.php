<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-lg-9">
            <div class="card border-0 shadow-lg rounded-4">
                <div class="card-header bg-gradient text-white d-flex justify-content-between align-items-center"
                     style="background: linear-gradient(135deg, #0061f2, #00b5f9);">
                    <h4 class="mb-0"><i class="fa-solid fa-pen-to-square me-2"></i>Yeni Blog Ekle</h4>
                </div>
                <div class="card-body p-4">
                    <form method="post" enctype="multipart/form-data">

                        <div class="mb-4">
                            <label class="form-label fw-bold">Başlık</label>
                            <input type="text" name="title" class="form-control form-control-lg"
                                   value="<?= set_value('title') ?>" placeholder="Blog başlığını yazınız">
                        </div>

                        <div class="mb-4">
                            <label class="form-label fw-bold">İçerik</label>
                            <textarea id="editor" name="content"><?= set_value('content') ?></textarea>
                        </div>

                        <div class="mb-4">
                            <label class="form-label fw-bold">Kapak Resmi</label>
                            <input type="file" name="image" class="form-control">
                            <div class="form-text">Desteklenen formatlar: JPG, PNG, GIF</div>
                        </div>

                        <div class="form-check form-switch mb-4">
                            <input type="checkbox" name="status" value="1" class="form-check-input" id="statusSwitch" checked>
                            <label for="statusSwitch" class="form-check-label fw-bold">Yayında</label>
                        </div>

                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-success btn-lg px-4">
                                <i class="fa-solid fa-save me-2"></i>Kaydet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.ckeditor.com/ckeditor5/41.4.2/classic/ckeditor.js"></script>
<script>
    ClassicEditor
        .create( document.querySelector( '#editor' ), {
            toolbar: [
                'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList',
                '|', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo'
            ]
        } )
        .catch( error => {
            console.error( error );
        } );
</script>
