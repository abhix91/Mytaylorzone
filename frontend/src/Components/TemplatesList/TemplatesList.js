import React from 'react'
import "./TemplatesList.css"
import { homeTemplates, shopTemplates, innerPagesTemplates, brands } from '../Assets/TemplatesData'
import { Link } from 'react-router-dom';

export default function TemplatesList({showTemplates, hideMobileMenu, togglebtn}) {
  return (
    <div className={showTemplates? 'templates-list show' : 'templates-list hide'}>
        <div className='container'>
          <div className='content'>
            <div className='templates'>
            <ul className='innerPages-templates'>
                <li className='title'><b>Pages</b></li>
                {
                  innerPagesTemplates.map(template=> {
                    const{id, name, path} = template;
                    return (
                      <li key={id}>
                        <Link className='link' onClick={hideMobileMenu} to={path}>{name}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              <ul className='home-templates'>
                <li className='title'><b>Home</b></li>
                {
                  homeTemplates.map(template=> {
                    const{id, name, path} = template;
                    return (
                      <li key={id}>
                        <Link className='link' onClick={hideMobileMenu} to={path}>{name}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              <ul className='shop-templates'>
                <li className='title'><b>shop</b></li>
                {
                  shopTemplates.map(template=> {
                    const{id, name, path} = template;
                    return (
                      <li key={id}>
                        <a className='link' onClick={hideMobileMenu} to={path}>{name}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          <ul className='brands'>
            {
              brands.map(template=> {
                const{id, name, img, path} = template;
                return (
                  <li key={id}>
                    <Link className='link' to={path}>
                      <img src={img} alt={name} />
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          </div>
        </div>
    </div>
  )
}
