import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

export default function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
        setTab(tabFromUrl);
        }
    }, [location.search]);
    return (
        <Sidebar className='w-full md:w-56'>
            <SidebarItems>
                <SidebarItemGroup>
                    {/* <Link to='/dashboard?tab=profile'> */}
                        <SidebarItem href='/dashboard?tab=profile' active={tab === 'profile'} icon={HiUser} label={"User"} labelColor='dark'>
                            Profile
                        </SidebarItem>
                    {/* </Link>                     */}
                    <SidebarItem icon={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    )
}
