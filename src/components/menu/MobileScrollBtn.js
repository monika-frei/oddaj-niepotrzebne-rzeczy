import React, {Component} from 'react'
import { HashLink as Link } from 'react-router-hash-link';

class MobileScrollBtn extends Component {

    handleScroll = () => {
        
    }

    render() {
        return (
            <div className = "scroll__top__btn" onClick = {this.handleScroll}>
                <Link
                    activeClass ="active"
                    smooth to = "#mobileHeader"
                ><div class="arrow__up"></div></Link>
            </div>
        )
    }s
}

export default MobileScrollBtn