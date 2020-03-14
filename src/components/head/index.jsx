import React from 'react';
import { Link } from 'react-router-dom'
import  './index.less';
export default class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuArr: [
                { link: '/about', name: 'about' },
                { link: '/products', name: 'products' },
                { link: '/applications', name: 'applications' },
                { link: '/services', name: 'services' },
                { link: '/videos', name: 'videos' },
                { link: '/contacts', name: 'contacts' },
              ]
        };
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 8% ' }}>
            <div style={{ height: '31px', width: '113px', marginTop: ' 10px' }} >
              <img style={{ height: '31px', width: '113px'}}  src='/static/image/head/logo.png' />
            </div>
            <ul>
              {this.state.menuArr.map((item, i) => {
                return (
                  <li key={i} >
                    <Link to={item.link}>
                      <span className='menu_item' style={{ padding: '0 15px', color: '#555', fontSize: 18, height: '30px', lineHeight: '30px', borderRight: '1px solid #ddd' }}>{item.name}</span>
                      {/* style={{ padding: '0 15px', color: '#555', fontSize: 18, height: '30px', lineHeight: '30px', borderRight: '1px solid #ddd' }} */}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        );
    }

}
