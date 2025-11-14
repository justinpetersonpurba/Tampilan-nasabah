import React, { useState } from 'react'
import UserInfo from './UserInfo'
import Balance from './Balance'
import TransactionHistory from './TransactionHistory'

const ATM = ({ userData }) => {
  const [currentScreen, setCurrentScreen] = useState('main')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pin, setPin] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulasi login sederhana
    if (pin === '1234') {
      setIsAuthenticated(true)
    } else {
      alert('PIN salah! Coba lagi.')
    }
    setPin('')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentScreen('main')
  }

  if (!isAuthenticated) {
    return (
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">BANK ATM</h1>
          <p className="text-gray-400">Masukkan PIN Anda</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Masukkan PIN (1234)"
              maxLength="4"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            MASUK
          </button>
        </form>
        
        <div className="mt-6 text-center text-gray-400 text-sm">
          Gunakan PIN: 1234 untuk demo
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl">
      {/* Header */}
      <div className="bg-blue-600 p-6 text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">BANK ATM</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition duration-200"
          >
            Keluar
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <UserInfo userData={userData} />
        
        {/* Navigation */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setCurrentScreen('balance')}
            className={`py-3 px-4 rounded-lg font-semibold transition duration-200 ${
              currentScreen === 'balance' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Cek Saldo
          </button>
          <button
            onClick={() => setCurrentScreen('transactions')}
            className={`py-3 px-4 rounded-lg font-semibold transition duration-200 ${
              currentScreen === 'transactions' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Riwayat Transaksi
          </button>
          <button
            onClick={() => setCurrentScreen('profile')}
            className={`py-3 px-4 rounded-lg font-semibold transition duration-200 ${
              currentScreen === 'profile' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Info Nasabah
          </button>
        </div>

        {/* Screen Content */}
        <div className="bg-gray-900 rounded-lg p-6 min-h-64">
          {currentScreen === 'balance' && <Balance balance={userData.balance} />}
          {currentScreen === 'transactions' && <TransactionHistory transactions={userData.transactions} />}
          {currentScreen === 'profile' && (
            <div className="text-white">
              <h2 className="text-xl font-bold mb-4">Informasi Nasabah</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Nama:</span>
                  <span className="font-semibold">{userData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">No. Rekening:</span>
                  <span className="font-semibold">{userData.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-500 font-semibold">Aktif</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Member Sejak:</span>
                  <span className="font-semibold">Januari 2023</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 p-4 text-center text-gray-500 text-sm">
        © 2024 BANK ATM - Layanan 24 Jam
      </div>
    </div>
  )
}

export default ATM