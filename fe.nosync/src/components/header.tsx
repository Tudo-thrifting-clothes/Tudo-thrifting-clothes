'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.jpg'
import user_icon from '@/assets/icon/user.svg'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Header: React.FC = () => {
  const pathname = usePathname()
  return (
    <header className="w-full bg-black">
      <div className="container w-full h-24 flex items-center justify-between text-white">
        <Image src={logo} alt="logo" className="w-16" />
        <div className="flex h-full gap-20 justify-center items-center">
          <Link href="/">
            <span
              className={cn('cursor-pointer py-2 border-b-2 border-b-black', {
                'border-b-white': pathname === '/',
              })}
            >
              Trang Chủ
            </span>
          </Link>
          <Link href="/danh-muc">
            <span
              className={cn('cursor-pointer py-2 border-b-2 border-b-black', {
                'border-b-white': pathname === '/danh-muc',
              })}
            >
              Danh Mục
            </span>
          </Link>
          <Link href="/gio-hang">
            <span
              className={cn('cursor-pointer py-2 border-b-2 border-b-black', {
                'border-b-white': pathname === '/gio-hang',
              })}
              ừ
            >
              Giỏ Hàng
            </span>
          </Link>
          <Link href="/thanh-toan">
            <span
              className={cn('cursor-pointer py-2 border-b-2 border-b-black', {
                'border-b-white': pathname === '/thanh-toan',
              })}
            >
              Thanh Toán
            </span>
          </Link>
        </div>
        <Image src={user_icon} alt="icon" className="w-8 cursor-pointer" />
      </div>
    </header>
  )
}

export default Header
