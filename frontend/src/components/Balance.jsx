import React from 'react'

const Balance = ({ balance }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="text-center text-white">
      <h2 className="text-2xl font-bold mb-6">Saldo Anda</h2>
      <div className="bg-gray-800 rounded-lg p-8 mb-6">
        <div className="text-4xl font-bold text-green-500 mb-2">
          {formatCurrency(balance)}
        </div>
        <p className="text-gray-400">Saldo Tersedia</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-blue-600 p-3 rounded-lg opacity-50 cursor-not-allowed">
          <p className="font-semibold">Setor Tunai</p>
          <p className="text-xs text-gray-300">(Tidak tersedia)</p>
        </div>
        <div className="bg-green-600 p-3 rounded-lg opacity-50 cursor-not-allowed">
          <p className="font-semibold">Tarik Tunai</p>
          <p className="text-xs text-gray-300">(Tidak tersedia)</p>
        </div>
      </div>
    </div>
  )
}

export default Balance