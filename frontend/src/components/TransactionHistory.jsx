import React from 'react'

const TransactionHistory = ({ transactions }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const formatDate = (date, time) => {
    return `${date} ${time}`
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-6">Riwayat Transaksi</h2>
      
      {transactions.length === 0 ? (
        <p className="text-gray-400 text-center py-8">Tidak ada transaksi</p>
      ) : (
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-gray-800 rounded-lg p-4 flex justify-between items-center hover:bg-gray-750 transition duration-200"
            >
              <div className="flex-1">
                <p className="font-semibold">{transaction.description}</p>
                <p className="text-gray-400 text-sm">
                  {formatDate(transaction.date, transaction.time)}
                </p>
              </div>
              <div className={`text-right ${
                transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'
              }`}>
                <p className="font-bold">
                  {transaction.type === 'credit' ? '+' : '-'} 
                  {formatCurrency(transaction.amount)}
                </p>
                <p className="text-sm text-gray-400 capitalize">
                  {transaction.type === 'credit' ? 'Pemasukan' : 'Pengeluaran'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 text-center text-gray-400 text-sm">
        Menampilkan {transactions.length} transaksi terakhir
      </div>
    </div>
  )
}

export default TransactionHistory