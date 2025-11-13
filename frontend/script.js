// Menambahkan interaksi sederhana
document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan efek klik pada kartu aksi cepat
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.addEventListener('click', function() {
            const actionName = this.querySelector('h3').textContent;
            alert(`Anda memilih: ${actionName}`);
        });
    });
    
    // Menambahkan efek hover pada item transaksi
    const transactionItems = document.querySelectorAll('.transaction-item');
    transactionItems.forEach(item => {
        item.addEventListener('click', function() {
            const transactionTitle = this.querySelector('.transaction-title').textContent;
            const transactionAmount = this.querySelector('.transaction-amount').textContent;
            const transactionDate = this.querySelector('.transaction-date').textContent;
            
            alert(`Detail Transaksi:\n\n${transactionTitle}\n${transactionAmount}\n${transactionDate}`);
        });
    });
    
    // Menambahkan interaksi pada menu sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hapus class active dari semua link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Tambah class active ke link yang diklik
            this.classList.add('active');
            
            const menuName = this.querySelector('span').textContent;
            alert(`Anda memilih menu: ${menuName}`);
        });
    });
    
    // Menambahkan interaksi pada tombol tutup saldo
    const balanceButton = document.querySelector('.btn-primary');
    if (balanceButton) {
        balanceButton.addEventListener('click', function() {
            const balanceAmount = document.querySelector('.balance-amount').textContent;
            alert(`Saldo Anda: ${balanceAmount}\n\nFitur ini akan menutup tampilan saldo untuk keamanan.`);
        });
    }
    
    // Menambahkan interaksi pada view all transaksi
    const viewAllLink = document.querySelector('.view-all');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Membuka halaman semua transaksi...');
        });
    }
});