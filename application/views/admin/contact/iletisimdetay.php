<style>
    body {
        background-color: #f0f2f5;
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }

    .contact-detail-container {
        max-width: 820px;
        margin: 40px auto;
        padding: 30px;
        background-color: #ffffff;
        border-radius: 20px;
        box-shadow: 0 12px 24px rgba(0,0,0,0.05);
    }

    .contact-detail-header {
        text-align: center;
        margin-bottom: 40px;
    }

    .contact-detail-header h1 {
        font-size: 28px;
        color: #1a1a1a;
        font-weight: 700;
    }

    .detail-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        margin-bottom: 30px;
    }

    .detail-card {
        background-color: #f8f9fb;
        border-radius: 14px;
        padding: 20px 24px;
        transition: 0.3s ease;
        border: 1px solid #e4e6eb;
    }

    .detail-card:hover {
        background-color: #eef2f7;
    }

    .label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #6c757d;
        margin-bottom: 6px;
    }

    .value {
        font-size: 1.05rem;
        color: #343a40;
        word-break: break-word;
    }

    .full-message {
        background-color: #f1f3f5;
        border-left: 4px solid #3b82f6;
        padding: 20px 24px;
        border-radius: 14px;
        margin-top: 20px;
    }

    .full-message h2 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 12px;
    }

    .full-message p {
        font-size: 1rem;
        line-height: 1.6;
        color: #4b5563;
        white-space: pre-wrap;
    }

    @media (max-width: 768px) {
        .detail-section {
            grid-template-columns: 1fr;
        }
    }
</style>

<div class="contact-detail-container">
    <div class="contact-detail-header">
        <h1>📨 Mesaj Detayı</h1>
    </div>

    <div class="detail-section">
        <div class="detail-card">
            <div class="label">Mesaj ID</div>
            <div class="value">#<?= $message->id; ?></div>
        </div>

        <div class="detail-card">
            <div class="label">Adı Soyadı</div>
            <div class="value"><?= $message->namesurname; ?></div>
        </div>

        <div class="detail-card">
            <div class="label">E-Posta</div>
            <div class="value"><?= $message->email; ?></div>
        </div>

        <div class="detail-card">
            <div class="label">Mesaj Konusu</div>
            <div class="value"><?= $message->subject; ?></div>
        </div>
    </div>

    <div class="full-message">
        <h2>Mesaj İçeriği</h2>
        <p><?= nl2br(htmlspecialchars($message->message)); ?></p>
    </div>
</div>
