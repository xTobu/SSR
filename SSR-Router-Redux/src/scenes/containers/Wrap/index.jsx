import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default React.createClass({
    render() {
        return (
          <div className="wrap">
            <Header />
            <ReactCSSTransitionGroup
              component="div"
              className="content"
              transitionName="example"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={0.1}
            >
              {React.cloneElement(this.props.children, {
                  key: this.props.location.pathname,
              })}
            </ReactCSSTransitionGroup>
            <Footer />

          </div>
        );
    },
});
