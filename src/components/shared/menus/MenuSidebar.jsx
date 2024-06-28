import React from 'react';
import Link from 'next/link';
import { FaBoxOpen, FaChartBar, FaCog, FaHome, FaRegFileAlt, FaTasks, FaTicketAlt, FaUserCog, FaUsers, FaImage } from "react-icons/fa";
import { MdInventory, MdSettings } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const MenuSidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        {
            key: 'dashboard',
            text: 'Dashboard',
            url: '/',
            icon: <FaHome />,
        },
        {
            key: 'subAdmin',
            text: 'Manage Sub Admin Users',
            url: '/manage-admin-users',
            icon: <FaUsers />,
        },
        {
            key: 'masterManagement',
            text: 'Master Managements',
            url: '/master-managements',
            icon: <MdSettings />,
            children: [
                {
                    key: 'displayName',
                    title: "Display Name",
                    url: "/master-managements/display-name",
                },
                {
                    key: 'manageCertificate',
                    title: "Manage Certificate",
                    url: "/master-managements/manage-certificate",
                },
                {
                    key: 'manageBrand',
                    title: "Manage Brand",
                    url: "/master-managements/manage-brand",
                },
                {
                    key: 'manageCategories',
                    title: "Manage Categories",
                    url: "/master-managements/manage-categories",
                },
                {
                    key: 'manageSubCategories',
                    title: "Manage Sub Categories",
                    url: "/master-managements/manage-sub-categories",
                },
                {
                    key: 'manageSub-SubCategories',
                    title: "Manage Sub Sub-Categories",
                    url: "/master-managements/manage-sub sub-categories",
                },

            ]
        },
        {
            key: 'manageProducts',
            text: 'Manage Products',
            url: '/products',
            icon: <FaBoxOpen />,
        },
        {
            key: 'manageInventory',
            text: 'Manage Inventory',
            url: '/manage-inventory',
            icon: <MdInventory />,
        },
        {
            key: 'manageCustomers',
            text: 'Manage Customers',
            url: '/manage-customers',
            icon: <FaUserCog />,
            children: [
                {
                    key: 'addCustomer',
                    title: "Add Customer",
                    url: "/master-managements/display-name",
                },
                {
                    key: 'editCustomer',
                    title: "Edit Customer",
                    url: "/master-managements/manage-brand",
                }
            ]
        },
        {
            key: 'manageRequest',
            text: 'Manage Request',
            url: '/manage-request',
            icon: <FaTasks />,
        },
        {
            key: 'manageTicket',
            text: 'Manage Ticket',
            url: '/manage-ticket',
            icon: <FaTicketAlt />,
        },
        {
            key: 'manageContents',
            text: 'Manage Contents',
            url: '/manage-contents',
            icon: <FaRegFileAlt />,
        },
        {
            key: 'generateReports',
            text: 'Generate Reports',
            url: '/generate-reports',
            icon: <FaChartBar />,
        },
        {
            key: 'banner',
            text: 'Banner',
            url: '/banner',
            icon: <FaImage />,
        },
        {
            key: 'settings',
            text: 'Settings',
            url: '/settings',
            icon: <FaCog />,
        },
    ];

    return (
        <div className="sidebar-container">
            <Menu mode="inline" defaultSelectedKeys={[pathname]} className='sidebar_menu_item'>
                {menuItems.map(item => (
                    item.children ? (
                        <SubMenu key={item.key} icon={item.icon} title={item.text}>
                            {item.children.map(child => (
                                <Menu.Item key={child.key} className={pathname === child.url ? "active" : ""}>
                                    <Link href={child.url}>{child.title}</Link>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ) : (
                        <Menu.Item key={item.key} icon={item.icon} className={pathname === item.url ? "active" : ""}>
                            <Link href={item.url}>{item.text}</Link>
                        </Menu.Item>
                    )
                ))}
            </Menu></div>

    );
};

export default MenuSidebar;
