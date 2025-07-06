import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-black'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>FANA</span>
                        Blog
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <FooterTitle title='About' />
                        <FooterLinkGroup col>
                            <FooterLink 
                                href="https://www.100jsprojects.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                100 JS Projects
                            </FooterLink>
                            <FooterLink 
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                2
                            </FooterLink>
                            <FooterLink 
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                3
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title='Follow Us' />
                        <FooterLinkGroup col>
                            <FooterLink 
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                1
                            </FooterLink>
                            <FooterLink 
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                2
                            </FooterLink>
                            <FooterLink 
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                3
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>                        
                        <FooterTitle title='Legal' />
                        <FooterLinkGroup col>
                            <FooterLink 
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                1
                            </FooterLink>
                            <FooterLink 
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                2
                            </FooterLink>
                            <FooterLink 
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                3
                            </FooterLink>
                        </FooterLinkGroup>                        
                    </div>
                </div>
            </div>
            <FooterDivider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <FooterCopyright href='#' by='Fana Blog' year={new Date().getFullYear()} />
                <div className='flex gap-6 mt-4 sm:justify-center'>
                    <FooterIcon href='#' icon={BsFacebook} />
                    <FooterIcon href='#' icon={BsInstagram} />
                    <FooterIcon href='#' icon={BsTwitter} />
                    <FooterIcon href='#' icon={BsGithub} />
                </div>
            </div>            
        </div>
    </Footer>    
  );
}
