import React from 'react'
import SearchBar from '../../components/SearchBar/'
import MyAccount from '../../components/MyAccount/'
import MiniCart from '../../components/MiniCart/'
import Menu from '../../components/Menu/Menu'
import { useMediaQuery } from 'react-responsive'

import './styles.scss'

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <header className="header">
      <div className="headerContent container">
        <div className="headerTop">
          {isMobile && (
            <div className="headerMenu">
              <Menu />
            </div>
          )}
          <div className="headerLogo">
            <img
              src="https://static.wixstatic.com/media/ca9c70_a667af8468be4f52a1a22b32c9d9c9c4~mv2.png/v1/crop/x_149,y_232,w_549,h_107/fill/w_156,h_26,al_c,q_85,usm_0.66_1.00_0.01/Logo_Roxa-02.webp"
              className="headerLogoCaret"
              alt="Framewrok"
            />
          </div>
          {!isMobile && (
            <>
              <div className="headerSearchBar">
                <SearchBar />
              </div>
              <div className="headerMyAccount">
                <MyAccount />
              </div>
            </>
          )}
          <div className="headerMiniCart">
            <MiniCart />
          </div>
        </div>
        {isMobile && (
          <div className="headerSearchBarMobile">
            <div className="headerSearchBar">
              <SearchBar />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
