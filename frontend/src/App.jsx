import React, { useState } from 'react'
import ATM from './components/ATM'

function App() {
  const [userData] = useState({
    name: "Ahmad Rizki",
    accountNumber: "1234567890",
    balance: 25000000,
    transactions: [
      { 
        id: 1, 
        type: 'debit', 
        amount: 500000, 
        description: 'Transfer ke BCA', 
        date: '2024-01-15', 
        time: '14:30' 
      },
      { 
        id: 2, 
        type: 'credit', 
        amount: 2000000, 
        description: 'Gaji Bulanan', 
        date: '2024-01-10', 
        time: '09:15' 
      },
      { 
        id: 3, 
        type: 'debit', 
        amount: 150000, 
        description: 'Pembayaran Listrik', 
        date: '2024-01-08', 
        time: '16:45' 
      },
      { 
        id: 4, 
        type: 'debit', 
        amount: 300000, 
        description: 'Belanja Supermarket', 
        date: '2024-01-05', 
        time: '11:20' 
      },
      { 
        id: 5, 
        type: 'credit', 
        amount: 1000000, 
        description: 'Transfer dari Teman', 
        date: '2024-01-02', 
        time: '13:50' 
      }
    ]
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <ATM userData={userData} />
    </div>
  )
}

export default App