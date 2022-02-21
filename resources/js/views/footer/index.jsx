import React from 'react'
import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent content">
        <div className="footerCol location">
          <h5 className="footerTitle titleArea">Localização</h5>
          <ul className="footerItems">
            <li className="footerItem">
              <a
                href="https://goo.gl/maps/Hq37VV6tqCkQu9Wa8"
                title="Ver no Mapa"
                className="footerItem--link"
                target="_blank"
                rel="noreferrer"
              >
                Rua Santa Rita Durão, 20. 8º, 10º e 16º andares Funcionários.
                BH/MG
              </a>
            </li>
          </ul>
        </div>
        <div className="footerCol copy">
          <div className="footerCopy framework">
            Created by
            <img
              src="https://static.wixstatic.com/media/ca9c70_a667af8468be4f52a1a22b32c9d9c9c4~mv2.png/v1/crop/x_149,y_232,w_549,h_107/fill/w_156,h_26,al_c,q_85,usm_0.66_1.00_0.01/Logo_Roxa-02.webp"
              className="headerLogoCaret"
              alt="Framewrok"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
