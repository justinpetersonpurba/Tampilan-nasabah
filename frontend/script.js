// Menambahkan interaksi sederhana
document.addEventListener('DOMContentLoaded', function() {
    // Fitur toggle saldo
    const toggleBalanceBtn = document.getElementById('toggleBalance');
    const balanceCard = document.querySelector('.balance-card');
    const balanceAmount = document.querySelector('.balance-amount');
    const balanceValues = document.querySelectorAll('.balance-value');
    
    let isBalanceHidden = false;
    
    if (toggleBalanceBtn) {
        toggleBalanceBtn.addEventListener('click', function() {
            isBalanceHidden = !isBalanceHidden;
            
            if (isBalanceHidden) {
                // Sembunyikan saldo
                balanceCard.classList.add('balance-hidden');
                toggleBalanceBtn.innerHTML = '<i class="fas fa-eye"></i> Buka Saldo';
                toggleBalanceBtn.classList.remove('btn-primary');
                toggleBalanceBtn.classList.add('btn-secondary');
            } else {
                // Tampilkan saldo
                balanceCard.classList.remove('balance-hidden');
                toggleBalanceBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Tutup Saldo';
                toggleBalanceBtn.classList.remove('btn-secondary');
                toggleBalanceBtn.classList.add('btn-primary');
            }
        });
    }
    
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
    
    // Menambahkan interaksi pada view all transaksi
    const viewAllLink = document.querySelector('.view-all');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Membuka halaman semua transaksi...');
        });
    }
});