import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: 'smarttechshop Admin',
    description: 'smarttechshop Admin Dashboard'
}

const AdminLayout = ({children} : {children: React.ReactNode}) => {
    return ( 
        <div>
            <AdminNav />
            {children}
        </div>
     );
}
 
export default AdminLayout;