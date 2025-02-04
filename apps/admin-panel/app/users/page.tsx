// 'use client';

// import { useEffect, useState } from 'react';
// import { fetchUsers } from '../../lib/api';

// export default function UsersPage() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchUsers()
//             .then(setUsers)
//             .catch(console.error);
//     }, []);

//     return (
//         <div>
//             <h1 className="text-2xl font-bold">Manage Users</h1>
//             <ul className="mt-4 p-4 border rounded shadow">
//                 {users.length > 0 ? (
//                     users.map((user) => (
//                         <li key={user.id} className="p-2 border-b">
//                             {user.email}
//                         </li>
//                     ))
//                 ) : (
//                     <p>No users found.</p>
//                 )}
//             </ul>
//         </div>
//     );
// }
