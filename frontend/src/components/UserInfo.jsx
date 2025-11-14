import React from 'react'

const UserInfo = ({ userData }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center text-white">
        <div>
          <h2 className="text-lg font-semibold">{userData.name}</h2>
          <p className="text-gray-400 text-sm">No. Rek: {userData.accountNumber}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Status</p>
          <p className="text-green-500 font-semibold">● Online</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfo